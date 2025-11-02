# Yacht Images Organization Guide

## 📁 Folder Structure

Your yacht images are now organized in a clean, scalable structure:

```
public/yachts/
├── README.md          # This documentation
├── 1/                 # Yacht ID 1 - Luxury Yacht Crystal Wave 55
│   └── main.jpg       # Main image (place your image here)
├── 2/                 # Yacht ID 2 - Luxury Yacht Golden Horizon 68
│   └── main.jpg
├── 3/                 # Yacht ID 3 - Luxury Yacht Silver Pearl 72
│   └── main.jpg
├── 4/                 # Yacht ID 4 - Luxury Yacht Infinity Dream 80
│   └── main.jpg
├── 5/                 # Yacht ID 5 - Luxury Yacht Diamond Breeze 60
│   └── main.jpg
├── 6/                 # Yacht ID 6 - Luxury Yacht Imperial Star 95
│   └── main.jpg
├── 7/                 # Yacht ID 7 - Caribbean Explorer 58
│   └── main.jpg
└── 8/                 # Yacht ID 8 - Mediterranean Voyager 75
    └── main.jpg
```

## 🚀 How It Works

1. **Each yacht has its own folder** named by its ID (1, 2, 3, etc.)
2. **Place `main.jpg`** (or `main.png`) in each folder
3. **The code automatically** displays the image or shows a placeholder if missing
4. **Hover effect** included - images zoom smoothly on hover

## 📸 Image Specifications

### Recommended Settings:
- **Dimensions**: 1200x900px (4:3 aspect ratio)
- **Minimum**: 800x600px
- **File Size**: Under 500KB for fast loading
- **Format**: JPEG (.jpg) for photos, PNG (.png) for logos/graphics
- **Naming**: `main.jpg` or `main.png`

### Image Quality Tips:
- Use high-quality yacht photos with good lighting
- Capture the exterior or deck view for main images
- Consider using professional yacht photography
- Ensure images are web-optimized (compressed but clear)

## 🔧 Adding New Yacht Images

### Quick Start:
1. Go to `public/yachts/[yacht-id]/`
2. Add your image as `main.jpg`
3. Refresh the browser - image will appear!

### Example:
```bash
# For yacht ID 1:
cp ~/Downloads/yacht-photo.jpg public/yachts/1/main.jpg
```

## 🎨 Current Yacht List

| ID | Yacht Name | Folder Path |
|----|------------|-------------|
| 1 | Luxury Yacht Crystal Wave 55 | `public/yachts/1/` |
| 2 | Luxury Yacht Golden Horizon 68 | `public/yachts/2/` |
| 3 | Luxury Yacht Silver Pearl 72 | `public/yachts/3/` |
| 4 | Luxury Yacht Infinity Dream 80 | `public/yachts/4/` |
| 5 | Luxury Yacht Diamond Breeze 60 | `public/yachts/5/` |
| 6 | Luxury Yacht Imperial Star 95 | `public/yachts/6/` |
| 7 | Caribbean Explorer 58 | `public/yachts/7/` |
| 8 | Mediterranean Voyager 75 | `public/yachts/8/` |

## 🔄 Future Expansion

### Adding More Images (Gallery):
You can add multiple images per yacht:
```
public/yachts/1/
├── main.jpg    # Primary image
├── 2.jpg       # Interior view
├── 3.jpg       # Deck view
├── 4.jpg       # Cabin view
└── 5.jpg       # Night view
```

### Adding a New Yacht:
1. Create a new folder with the next ID number
2. Update `src/components/sections/YachtListings.tsx` to add yacht data
3. Add the yacht's main image to the new folder

## 🎯 Fallback System

If an image is missing or fails to load:
- A clean placeholder graphic (diagonal lines) will display
- No broken image icons
- User experience remains seamless

## 💡 Pro Tips

1. **Consistent Styling**: Keep all images in the same aspect ratio (4:3)
2. **File Naming**: Stick to lowercase and simple names
3. **Organization**: One yacht = one folder
4. **Backups**: Keep original high-res images in a separate backup folder
5. **WebP Format**: Consider using `.webp` for even better compression

## 🛠️ Technical Details

**Image Path in Code**: `/yachts/[id]/main.jpg`
**Component**: `src/components/ui/YachtCard.tsx`
**Data Source**: `src/components/sections/YachtListings.tsx`

**Features**:
- ✅ Automatic image loading
- ✅ Error handling with fallback
- ✅ Hover zoom animation
- ✅ Lazy loading ready
- ✅ Responsive sizing

---

**Need help?** Check the code in `YachtCard.tsx` or update yacht data in `YachtListings.tsx`

