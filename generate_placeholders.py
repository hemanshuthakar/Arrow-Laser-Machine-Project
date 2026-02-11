
import os
from PIL import Image, ImageDraw, ImageFont

PRODUCTS = {
    "fiber-marking": "Fiber Laser Marking Machine",
    "fly-marking": "Fly Laser Marking Machine",
    "uv-marking": "UV Laser Marking Machine",
    "co2-marking": "CO2 Laser Marking Machine",
    "co2-cutting": "CO2 Laser Engraving & Cutting",
    "jewelry-soldering": "Jewelry Soldering Machine",
    "jewelry-cutting": "Jewelry Cutting Machine",
    "welding-cleaning": "Welding & Rust Cleaning"
}

BASE_DIR = 'src/assets/images/product-images'
LOGO_PATH = 'public/logo.png'

def create_placeholder(folder, filename, text):
    path = os.path.join(BASE_DIR, folder)
    os.makedirs(path, exist_ok=True)
    full_path = os.path.join(path, filename)

    # create white image
    W, H = 1024, 1024
    img = Image.new('RGB', (W, H), color='white')
    draw = ImageDraw.Draw(img)

    # Try to load a font
    try:
        font_large = ImageFont.truetype("arial.ttf", 60)
        font_small = ImageFont.truetype("arial.ttf", 40)
    except IOError:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

    # Draw centered text
    # Product Name
    _, _, w, h = draw.textbbox((0, 0), text, font=font_large)
    draw.text(((W-w)/2, (H-h)/2 - 50), text, fill="black", font=font_large)
    
    # View Type
    view_text = "Main View" if "main" in filename else "Detail View"
    _, _, w2, h2 = draw.textbbox((0, 0), view_text, font=font_small)
    draw.text(((W-w2)/2, (H-h)/2 + 50), view_text, fill="gray", font=font_small)

    # Add Logo
    if os.path.exists(LOGO_PATH):
        try:
            logo = Image.open(LOGO_PATH).convert("RGBA")
            # Resize
            width_ratio = 0.3
            new_logo_width = int(img.width * width_ratio)
            aspect_ratio = logo.height / logo.width
            new_logo_height = int(new_logo_width * aspect_ratio)
            logo = logo.resize((new_logo_width, new_logo_height), Image.Resampling.LANCZOS)
            
            # Padding
            padding = 50
            pos = (W - new_logo_width - padding, padding)
            
            # Paste
            logo_layer = Image.new('RGBA', img.size, (0,0,0,0))
            logo_layer.paste(logo, pos, mask=logo)
            img = Image.alpha_composite(img.convert('RGBA'), logo_layer)
            img = img.convert('RGB') # drop alpha for saving as PNG/JPG without issues if needed
        except Exception as e:
            print(f"Error adding logo: {e}")

    img.save(full_path, "PNG")
    print(f"Generated {full_path}")

def main():
    if not os.path.exists(BASE_DIR):
        os.makedirs(BASE_DIR)
        
    for folder, name in PRODUCTS.items():
        create_placeholder(folder, "main.png", name)
        create_placeholder(folder, "variant1.png", name)

if __name__ == "__main__":
    main()
