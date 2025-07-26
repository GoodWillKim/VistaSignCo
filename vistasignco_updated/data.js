// data.js
// Exposes a global PRODUCTS array containing all product definitions.
window.PRODUCTS = [
  {
    id: "vinyl_banner_13oz",
    name: "13oz Vinyl Banner",
    category: "Banners",
    // Update base price to reflect Stripe pricing (per ft²)
    basePrice: 3.5,
    description: "Premium heavyweight 13oz scrim vinyl banner for indoor and outdoor use.",
    image: "assets/placeholder.jpg",
    // Stripe payment link for 13oz Vinyl Banner
    paymentLink: "https://buy.stripe.com/test_eVq9Av2BaOwZeDpdPE4Vy00",
    options: {
      sides: [
        { label: "1 Side", multiplier: 1 },
        { label: "2 Sides", multiplier: 2 },
      ],
      material: [
        { label: "13oz Matte", additional: 0 },
        { label: "13oz Gloss", additional: 0.25 },
      ],
      hem: [
        { label: "All Sides", additional: 0.25 },
        { label: "Top & Bottom", additional: 0.15 },
      ],
      grommet: [
        { label: "Every 2'", additional: 0.1 },
        { label: "None", additional: 0.0 },
      ],
    },
  },
  {
    id: "blockout_banner_18oz",
    name: "18oz Blockout Banner",
    category: "Banners",
    // Update base price to reflect Stripe pricing (per ft²)
    basePrice: 4.0,
    description: "Durable 18oz blockout banner ideal for double‑sided prints.",
    image: "assets/placeholder.jpg",
    // Stripe payment link for 18oz Blockout Banner
    paymentLink: "https://buy.stripe.com/test_28E4gB0t2cFhcvbhvk4Vy01",
    options: {
      sides: [
        { label: "1 Side", multiplier: 1 },
        { label: "2 Sides", multiplier: 2 },
      ],
      material: [
        { label: "18oz Matte", additional: 0 },
        { label: "18oz Gloss", additional: 0.3 },
      ],
      hem: [
        { label: "All Sides", additional: 0.3 },
        { label: "Top & Bottom", additional: 0.2 },
      ],
      grommet: [
        { label: "Every 2'", additional: 0.15 },
        { label: "None", additional: 0.0 },
      ],
    },
  },
  {
    id: "mesh_banner",
    name: "Mesh Banner",
    category: "Banners",
    // Update base price to reflect Stripe pricing (per ft²)
    basePrice: 4.0,
    description: "Perforated mesh banner perfect for windy locations and building wraps.",
    image: "assets/placeholder.jpg",
    // Stripe payment link for Mesh Banner
    paymentLink: "https://buy.stripe.com/test_7sY3xc2Ba3Jb52P3b04VyO2",
    options: {
      sides: [
        { label: "1 Side", multiplier: 1 },
      ],
      material: [
        { label: "Mesh", additional: 0 },
      ],
      hem: [
        { label: "All Sides", additional: 0.2 },
      ],
      grommet: [
        { label: "Every 2'", additional: 0.1 },
        { label: "None", additional: 0.0 },
      ],
    },
  },
  {
    id: "advertising_flag",
    name: "Advertising Flag",
    category: "Flags",
    // Update base price to reflect Stripe pricing (per item)
    basePrice: 50.0,
    description: "High‑visibility advertising flag to capture attention at events or storefronts.",
    image: "assets/placeholder.jpg",
    // Stripe payment link for Advertising Flag
    paymentLink: "https://buy.stripe.com/test_4gM3cxejSbbDan9FXM4Vy03",
    options: {
      sides: [
        { label: "1 Side", multiplier: 1 },
        { label: "2 Sides", multiplier: 1.5 },
      ],
      material: [
        { label: "Polyester", additional: 0 },
        { label: "Satin", additional: 0.5 },
      ],
      hem: [
        { label: "All Sides", additional: 0.15 },
      ],
      grommet: [
        { label: "None", additional: 0.0 },
      ],
    },
  },
];