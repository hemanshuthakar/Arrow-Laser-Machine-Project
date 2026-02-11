
import os
from PIL import Image, ImageDraw, ImageFont, ImageEnhance

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

# Colors
BG_COLOR_START = (20, 30, 60) # Dark Blue
BG_COLOR_END = (10, 10, 20)   # Almost Black
TEXT_COLOR = (255, 255, 255)
ACCENT_COLOR = (0, 120, 215) # Arrow Blue

def create_gradient(width, height):
    base = Image.new('RGB', (width, height), BG_COLOR_START)
    top = Image.new('RGB', (width, height), BG_COLOR_END)
    mask = Image.new('L', (width, height))
    mask_data = []
    for y in range(height):
        for x in range(width):
            mask_data.append(int(255 * (y / height)))
    mask.putdata(mask_data)
    base.paste(top, (0, 0), mask)
    return base

def add_tech_grid(img):
    draw = ImageDraw.Draw(img, 'RGBA')
    width, height = img.size
    step = 100
    for x in range(0, width, step):
        draw.line((x, 0, x, height), fill=(255, 255, 255, 10), width=1)
    for y in range(0, height, step):
        draw.line((0, y, width, y), fill=(255, 255, 255, 10), width=1)
    return img

def create_premium_placeholder(folder, filename, text):
    path = os.path.join(BASE_DIR, folder)
    os.makedirs(path, exist_ok=True)
    full_path = os.path.join(path, filename)

    W, H = 1024, 1024
    
    # 1. Background Gradient
    img = create_gradient(W, H)
    
    # 2. Tech Grid
    img = add_tech_grid(img)
    draw = ImageDraw.Draw(img)

    # 3. Fonts
    try:
        # Try to find a system font or fallback
        font_large = ImageFont.truetype("arial.ttf", 80)
        font_small = ImageFont.truetype("arial.ttf", 50)
    except IOError:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

    # 4. Center Text
    # Product Name
    bbox = draw.textbbox((0, 0), text, font=font_large)
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    
    # Draw a "Product Box" background for text
    box_padding = 40
    box_x1 = (W - w) / 2 - box_padding
    box_y1 = (H - h) / 2 - box_padding - 50
    box_x2 = box_x1 + w + box_padding * 2
    box_y2 = box_y1 + h + box_padding * 2
    
    draw.rectangle((box_x1, box_y1, box_x2, box_y2), outline=ACCENT_COLOR, width=3)
    
    draw.text(((W-w)/2, (H-h)/2 - 50), text, fill="white", font=font_large)
    
    # View Type
    view_text = "Main View" if "main" in filename else "Detail View"
    bbox2 = draw.textbbox((0, 0), view_text, font=font_small)
    w2 = bbox2[2] - bbox2[0]
    draw.text(((W-w2)/2, (H-h)/2 + 80), view_text, fill=ACCENT_COLOR, font=font_small)

    # 5. Add Logo (Top Right)
    if os.path.exists(LOGO_PATH):
        try:
            logo = Image.open(LOGO_PATH).convert("RGBA")
            # Resize
            width_ratio = 0.35
            new_logo_width = int(img.width * width_ratio)
            aspect_ratio = logo.height / logo.width
            new_logo_height = int(new_logo_width * aspect_ratio)
            logo = logo.resize((new_logo_width, new_logo_height), Image.Resampling.LANCZOS)
            
            # Padding
            padding = 40
            # Top Right Position
            pos = (W - new_logo_width - padding, padding)
            
            # Paste
            logo_layer = Image.new('RGBA', img.size, (0,0,0,0))
            logo_layer.paste(logo, pos, mask=logo)
            
            img = img.convert("RGBA")
            img = Image.alpha_composite(img, logo_layer)
            img = img.convert("RGB")
        except Exception as e:
            print(f"Error adding logo: {e}")

    img.save(full_path, "PNG")
    print(f"Generated Premium Placeholder: {full_path}")

def main():
    print("Generating premium placeholders...")
    if not os.path.exists(BASE_DIR):
        os.makedirs(BASE_DIR)
        
    for folder, name in PRODUCTS.items():
        create_premium_placeholder(folder, "main.png", name)
        create_premium_placeholder(folder, "variant1.png", name)

if __name__ == "__main__":
    main()
