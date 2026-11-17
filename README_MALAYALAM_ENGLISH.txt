SURYA ASSOCIATES — LIGHT FUTURISTIC CLOUDFLARE PAGES WEBSITE

WHAT IS INCLUDED
- index.html: complete responsive website with light green/white/sky-blue theme.
- solar-house-scene.svg: original illustrated green home with rooftop solar panels; used as a softly blurred hero background.
- data/products.json: 176 catalogue records for reference/editing.
- functions/api/chat.js: secure Cloudflare Pages AI chat endpoint.
- wrangler.toml: Cloudflare Pages output configuration.

DESIGN / FEATURES
- Animated welcome hero: Welcome to Shop Assistant AI / Welcome to Surya Associates / Your Energy Power Solution.
- Soft-focus solar house and greenery background.
- Sticky navigation with AI Assistant shortcut.
- Scroll reveal animations and animated product cards.
- Product categories: Inverter, Battery, Solar, Solar Battery, Solar Power System, Water Purifier, CCTV System and Accessories.
- Search, sorting, catalogue filters, cart, quantity controls and WhatsApp enquiry.
- Admin / API settings for shop contact details and AI model preference.
- AI Assistant section with local catalogue fallback and Cloudflare AI endpoint.

PREVIEW
1. Extract the ZIP.
2. Keep solar-house-scene.svg beside index.html.
3. Double-click index.html to preview the website and catalogue locally.
4. AI answers from the provider require Cloudflare Pages deployment and OPENAI_API_KEY.

CLOUDFLARE PAGES DEPLOYMENT
For a Git-connected Pages project:
- Build command: leave blank.
- Root directory: /
- Deploy command (when using Wrangler): npx wrangler pages deploy . --project-name=surya-associates-shop-assistant
- Do not use `npx wrangler deploy` for this Pages project.

AI SECRET
In Cloudflare Pages → Settings → Variables and Secrets, add OPENAI_API_KEY as a SECRET for Production. Optional variable: OPENAI_MODEL (default gpt-4.1-mini). Never put the API key in index.html or products.json. Redeploy after adding/changing secrets.

CATALOGUE NOTICE
The website includes 176 catalogue records across the existing product groups. The Solar, Solar Battery and Solar Power System tabs are convenient filters over those records; they do not create new inventory. Verify model names, prices, stock, warranty and specifications with the shop before publishing. Values are not live inventory.

AI provider usage may be chargeable. Cloudflare hosting quotas/features may change. This is a website project, not Raspberry Pi GPIO/servo hardware code.

LATEST DESIGN UPDATE (17-Nov-2026)
- White / light green theme throughout.
- Scroll-driven two-stage welcome animation: Shop Assist AI rises away and Surya Associates title appears centred.
- Mobile product catalogue displays two cards per row (desktop displays three).
- Product cards use category-based representative product photographs stored in product-images/.
- Tap a product card to open its specification/details panel; Add to Cart is available directly.
- All 176 catalogue entries have an image path in both data/products.json and the embedded fallback catalogue.
NOTE: Product pictures are representative category illustrations, not verified photographs of each exact brand/model/SKU. Replace them with actual shop/manufacturer images for exact model matching.
