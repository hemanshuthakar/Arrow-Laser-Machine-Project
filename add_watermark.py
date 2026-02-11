
import os
from PIL import Image

LOGO_PATH = 'public/logo.png'
TARGET_DIR = 'src/assets/images/product-images'

def add_watermark(image_path, logo_path):
    try:
        base_image = Image.open(image_path).convert("RGBA")
        logo = Image.open(logo_path).convert("RGBA")

        # Calculate logo size (e.g., 25% of image width)
        width_ratio = 0.3
        new_logo_width = int(base_image.width * width_ratio)
        aspect_ratio = logo.height / logo.width
        new_logo_height = int(new_logo_width * aspect_ratio)
        
        logo = logo.resize((new_logo_width, new_logo_height), Image.Resampling.LANCZOS)

        # Position: Top Right with padding
        padding = int(base_image.width * 0.05)
        position = (base_image.width - new_logo_width - padding, padding)
        
        # Paste logo
        # Create a transparent layer for the watermark
        watermark_layer = Image.new('RGBA', base_image.size, (0,0,0,0))
        watermark_layer.paste(logo, position, mask=logo)
        
        # Composite
        combined = Image.alpha_composite(base_image, watermark_layer)
        
        # Convert back to RGB if saving as JPG/PNG (PNG supports RGBA but usually we want opaque background for photos)
        # However, user's current images seem to be PNG.
        # If the generated image has transparency (unlikely for product photo), we keep it.
        # But 'generate_image' usually returns PNG.
        
        combined.save(image_path)
        print(f"Watermarked: {image_path}")
        
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

def main():
    if not os.path.exists(LOGO_PATH):
        print(f"Logo not found at {LOGO_PATH}")
        return

    for root, dirs, files in os.walk(TARGET_DIR):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                full_path = os.path.join(root, file)
                add_watermark(full_path, LOGO_PATH)

if __name__ == "__main__":
    main()
