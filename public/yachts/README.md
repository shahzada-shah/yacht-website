# Yacht Images

This folder contains all yacht images for the yacht listings.

## Folder Structure

```
public/yachts/
├── 1/
│   ├── boat_01_01.jpg   # Main image for yacht ID 1
│   ├── boat_01_02.jpg   # Additional images (optional)
│   ├── boat_01_03.jpg
│   └── boat_01_04.jpg
├── 2/
│   ├── boat_02_01.jpg
│   ├── boat_02_02.jpg
│   ├── boat_02_03.jpg
│   └── boat_02_04.jpg
├── 3/
│   ├── boat_03_01.jpg
│   └── ...
└── ...
```

## Naming Convention

**Pattern**: `boat_[ID]_[NUMBER].jpg`

- `boat_01_01.jpg` - Main image for Yacht 1
- `boat_01_02.jpg` - Second image for Yacht 1
- `boat_01_03.jpg` - Third image for Yacht 1
- `boat_02_01.jpg` - Main image for Yacht 2
- `boat_02_02.jpg` - Second image for Yacht 2

**Important**:
- First image (`boat_XX_01.jpg`) is always the main card image
- ID should be padded with zero (01, 02, 03... not 1, 2, 3)
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

## Image Specifications

- **Recommended size**: 1200x900px (4:3 aspect ratio)
- **Minimum size**: 800x600px
- **File size**: Keep under 500KB for optimal loading
- **Format**: JPEG for photos, PNG for images with transparency

## Yacht Image Mapping

| Yacht ID | Yacht Name | Image Files |
|----------|------------|-------------|
| 1 | Luxury Yacht Crystal Wave 55 | `boat_01_01.jpg` to `boat_01_04.jpg` |
| 2 | Luxury Yacht Golden Horizon 68 | `boat_02_01.jpg` to `boat_02_04.jpg` |
| 3 | Luxury Yacht Silver Pearl 72 | `boat_03_01.jpg` to `boat_03_04.jpg` |
| 4 | Luxury Yacht Infinity Dream 80 | `boat_04_01.jpg` to `boat_04_04.jpg` |
| 5 | Luxury Yacht Diamond Breeze 60 | `boat_05_01.jpg` to `boat_05_04.jpg` |
| 6 | Luxury Yacht Imperial Star 95 | `boat_06_01.jpg` to `boat_06_04.jpg` |
| 7 | Caribbean Explorer 58 | `boat_07_01.jpg` to `boat_07_04.jpg` |
| 8 | Mediterranean Voyager 75 | `boat_08_01.jpg` to `boat_08_04.jpg` |

## Adding Images

1. Go to `public/yachts/[yacht-id]/`
2. Add images following the naming pattern
3. At minimum, add `boat_XX_01.jpg` (main image)
4. Optionally add more images (`02`, `03`, `04`, etc.)

## Fallback

If no image is found, the system will display a placeholder graphic.
