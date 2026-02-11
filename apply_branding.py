
import os
from PIL import Image, ImageOps

LOGO_PATH = 'public/logo.png'
TARGET_DIR = 'src/assets/images/product-images'

def process_image(image_path):
    try:
        if not os.path.exists(LOGO_PATH):
            print(f"Logo not found: {LOGO_PATH}")
            return

        img = Image.open(image_path).convert("RGBA")
        logo = Image.open(LOGO_PATH).convert("RGBA")

        # Resize logo to 25% of image width
        target_width = int(img.width * 0.25)
        ratio = target_width / float(logo.width)
        target_height = int(logo.height * ratio)
        logo = logo.resize((target_width, target_height), Image.Resampling.LANCZOS)

        # Create transparent canvas
        watermark = Image.new('RGBA', img.size, (0,0,0,0))
        
        # Position: Top Right with 5% padding
        padding = int(img.width * 0.05)
        x = img.width - target_width - padding
        y = padding
        
        watermark.paste(logo, (x, y), mask=logo)
        
        # Composite
        final_img = Image.alpha_composite(img, watermark)
        
        # Save as PNG to preserve quality (or JPG if preferred, but existing code uses PNG imports mostly)
        final_img = final_img.convert("RGB")
        final_img.save(image_path, quality=95)
        print(f"Processed: {image_path}")

    except Exception as e:
        print(f"Error processing {image_path}: {e}")

def main():
    # Map of generated raw names to target paths
    # We will assume the user manually runs this or we run it after generation
    # But for now, let's just scan the directory
    for root, dirs, files in os.walk(TARGET_DIR):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                process_image(os.path.join(root, file))

if __name__ == "__main__":
    main()
