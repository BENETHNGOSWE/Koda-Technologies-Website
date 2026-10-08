# Latest update: homepage slide 2 promotes Achete

Replaced the second hero slide’s Vina branding, AI-assistant claims and chat visual with Achete content based on the official product website. Headline: “Meet Achete. Your store. One simple link.” Supporting copy covers products, prices, stock and a shareable digital storefront.

The original two-column slide layout and Swiper navigation/transitions remain. A locally rendered animated storefront concept with sample product illustrations replaces the AI chat. It is labelled illustrative, not an actual Achete screenshot. “Explore Achete” opens the local product page; “Visit Achete” opens `https://achete.me/`. The source Vina video-trigger ID and outgoing Vina link are removed from this slide.

Scoped CSS: `assets-new/css/koda-home-achete.css`. Existing legacy class names remain only for compatible typography/layout. The old chat initializer safely skips the new storefront visual. No new external assets or dependencies were added.

QA: `review/home-achete-slide-checks.json` — 1440/768/390/320px, no JS errors or horizontal overflow, correct content/links and working next-slide navigation. The rest of the homepage body was structurally verified unchanged against `review/home-before-achete-slide.html`. Product pages are untouched.

---

# Latest update: Achete product details and approved layout

Replaced Achete’s earlier enquiry-only page with the approved KodaFreight layout, using product information retrieved from **https://achete.me/**. This supersedes the earlier instruction to keep Achete minimal until product details were available.

- Same simplified hero and spacing, seven-card What We Offer grid/mobile carousel, six-card Why Achete section, accessible FAQ layout and Get Started section.
- Product content covers catalogues/images/prices, store handles, shareable storefront/product links, stock updates, categories/collections, product performance and product discovery/ordering.
- Six FAQ questions and answers adapted from the official homepage. Hero and final CTA link to Achete; the example storefront link is `https://achete.me/kodastore`. Koda’s enquiry button prefills Achete on the local contact form.
- No copied business/product/order counts, guaranteed sales claims or unsubstantiated integrations. The example `your-handle` is illustrative text, not a claimed live storefront.
- Original Koda header/footer, colours and local product navigation remain. All other page hashes are unchanged.
- QA: `review/achete-layout-checks.json` — 1440/768/390/320px; no broken images, failed assets, JavaScript errors or horizontal overflow; all six FAQs fit, carousel works and contact prefill passes. Source/scope and preservation evidence: `review/achete-source-and-scope.json`.
- Exact previous page: `review/achete-before-product-layout.html`.

---

# Latest update: requested KodaPOS simplification

- Removed the hero dashboard illustration, floating dashboard cards and their image caption. Kept the title, description, buttons and side icons. Added the same 100px desktop / 75px mobile lower padding plus 40px button-row margin as the approved product pages.
- Replaced the person photograph in the retail-challenges circle with local navy/gold KodaPOS wordmark artwork (`assets-new/images/pos/kodapos-circle.svg`). The surrounding challenge content is unchanged.
- Removed the entire “Why KodaPOS is the Best POS Software for Retail Businesses” block, including its associated four-card solution panel.
- Removed the pricing CTA “Get Started with Smarter Business Management – At the Right Price”.
- Removed the “KodaPOS: Making businesses super-efficient, profitable, and competitive!” CTA section.
- Other KodaPOS sections were structurally compared and verified unchanged. All other page hashes are unchanged.
- Browser QA at 1440/768/390/320px: no JavaScript errors, failed responses, broken images or horizontal overflow. Remaining FAQs and desktop/mobile dashboard controls pass. Reports: `review/kodapos-cleanup-checks.json` and `review/kodapos-removals-preservation.json`. Previous page saved as `review/kodapos-before-requested-removals.html`.

---

# Latest update: shared product-page layout

Applied the approved KodaFreight layout to **KodaStocks, KodaSMS and KodaHR & Payroll**. Per user selection, **KodaPOS and Achete remain unchanged**. KodaFreight and the homepage also remain unchanged (page hashes verified).

All three pages now use the simplified hero without a dashboard image, the extra 40px below the buttons, seven-card What We Offer layout, six-card Why Us section, accessible FAQ format and existing Get Started CTA. Each retains its own four approved feature descriptions, product headline, FAQ content and local contact prefill. Three secondary cards describe Koda’s integration/configuration/development services rather than unconfirmed product modules. KodaStocks retains the investment-research disclaimer.

The approved `koda-freight-offer` and `koda-freight-details` components are reused across these pages (their historical filenames/class names are retained to avoid modifying the approved Freight page). New `assets-new/css/koda-product-layout.css` provides matching hero spacing on the three pages.

QA: `review/shared-product-layout-checks.json` contains 12 checks across 1440/768/390/320px: no JavaScript errors, failed assets, broken images or horizontal overflow; all FAQ answers fit, mobile carousels reach all seven cards and enquiry prefills identify the correct product. `review/shared-product-layout-preservation.json` records unchanged-page hashes. Internal links pass. Exact earlier product pages are saved under `review/*-before-shared-layout.html`.

---

# Latest update: simplified KodaFreight hero

Removed the large conceptual dashboard and its four floating rectangular boxes from the first section only. Kept the original heading, description, buttons, side icons and background. Added 100px bottom padding on desktop and 75px on mobile before the next section. What We Offer, Why Us, FAQ, Get Started, navigation and footer are unchanged. Browser checks at 1440/390/320px passed without JavaScript errors or horizontal overflow (`review/kodafreight-hero-checks.json`).

---

# Latest update: complete KodaFreight offer / Why Us / FAQ layouts

Requested order is now: existing hero → What We Offer → Why Us → Questions about KodaFreight → existing Get Started → existing footer.

- What We Offer now uses the full seven-card source structure: featured left card, four smaller cards, and two bottom wide cards. The original four content points remain; three additional cards describe Koda’s documented integration, ERP configuration and custom development services, not unconfirmed included product modules.
- Added the reference’s six-card Why Us layout, with factual Koda content and the responsive View More control.
- Converted the four original KodaFreight questions/answers to the reference FAQ’s two-column header/contact and accordion layout. Accessible controls, keyboard interaction and dynamic answer sizing avoid mobile clipping.
- Header, original hero, Get Started CTA and footer are unchanged. Other pages are untouched.
- QA: `review/kodafreight-details-checks.json`. Checked 1440/768/390/320px, seven cards/two bottom boxes, mobile carousel, Why Us expansion, all FAQ answers, no document overflow, failed assets or JavaScript errors. Internal links pass.
- Scoped assets: `assets-new/css/koda-freight-details.css`, `assets-new/js/koda-freight-details.js`, alongside the existing offer assets.
- Exact pre-edit page: `review/kodafreight-before-three-sections.html`.

---

# Latest update: KodaFreight What We Offer section

Only KodaFreight’s second content section has changed. The old conceptual image and stacked capability panel were replaced with the retail reference’s What We Offer card styling: one featured navy card, two smaller cards and a wide contact card. All four existing content points and the original heading/subtitle are retained. Mobile uses a touch carousel with pagination. No additional modules, testimonials or statistics were introduced.

The hero, header, FAQ markup, contact CTA and footer were verified unchanged against the pre-edit page. KodaPOS and all other pages are untouched. The exact pre-edit KodaFreight page is saved as `review/kodafreight-before-offer.html` for rollback.

Scoped assets: `assets-new/css/koda-freight-offer.css` and `assets-new/js/koda-freight-offer.js`. QA: `review/kodafreight-offer-checks.json` — desktop/tablet/mobile (1440/768/390/320), no JavaScript errors, failed assets or document overflow; mobile carousel and FAQ pass.

---

# Latest update: KodaFreight rollback

Restored the previous KodaFreight product layout and original approved content, replacing the retail-template revision. The original hero, conceptual capability illustrations, four capability controls, FAQ and contact CTA are restored, using the shared navy/gold styles and previously corrected responsive layout. KodaPOS, homepage integration K. mark, other pages, navigation and footer remain unchanged. The retail-template assets below are unused historical assets.

---

# Latest update: KodaFreight uses the complete retail template

- Reference: **https://vasy.ai/retail/**. KodaFreight retains all 11 source sections, their order, responsive layouts, dashboard chart, floating cards, offer grid/mobile slider, expandable workflow cards, desktop/mobile workflow carousel, integration layout, outcome grid, comparison table, Why Koda cards, process carousel and custom FAQs.
- Content now concerns freight operations and Koda’s documented product/services. The profile identifies KodaFreight as the flagship freight SaaS but does not specify individual modules. Workflow examples are therefore explicitly discussion topics, not unverified included-feature promises.
- All 33 workflow cards remain, with unique freight-related topics. The source’s retail-provider logos are replaced with relevant system categories; Koda’s documented Odoo/Frappe/TRA services are distinguished from included product integrations.
- The hero is a labelled concept illustration with example data, not a product screenshot. Vendor revenue/accuracy figures are replaced with qualitative goals. Vendor testimonials become four project-process cards; the carousel and card structure remain. The client strip contains only the six supplied Koda company clients, without claiming that they use KodaFreight.
- Navy/gold branding and shared navigation/footer are retained. Demo/contact links open the local Contact page with KodaFreight preselected. KodaPOS and other product scopes remain unchanged.
- Added local page assets: `assets-new/css/koda-freight.css`, `assets-new/js/koda-freight.js`, `assets-new/images/koda-freight/`, pinned Chart.js 4.4.8 under `assets-new/vendor/chart.umd.js`. No tracking scripts or source-vendor forms imported.
- Browser checks: 1440, 768, 390 and 320px; no JavaScript errors, failed asset responses, broken images or horizontal document overflow.
- Interactions: chart renders; FAQ opens; stage carousel changes; demo prefill works; mobile features expand/collapse; Why Koda expands; offer/workflow/integration sliders initialize; 21 carousel cards move correctly between desktop and mobile layouts.
- QA: `review/kodafreight-browser.json`, `review/kodafreight-interactions.json`, `review/kodafreight-assets.json`.

Review build only. No GitHub push or public deployment performed. This replaces the earlier shorter KodaFreight page described below.

---

# Latest update: KodaPOS billing-page template and K. integration hub

- The homepage “Our integration partners” centre now uses a navy **K.** with a gold dot. Its original size, category controls, surrounding logos and animation are preserved.
- KodaPOS now follows **https://vasy.ai/best-pos-billing-retail-software**, the latest user-selected reference (not the earlier `/retail/` reference).
- Preserved the reference hero, floating dashboard artwork, billing challenges, feature panels, feature cards, retail-industry carousel, reporting layout, paired integration tabs, dashboard controls, animated benefit rings, workflow table, key-feature/support sliders and FAQ accordions.
- The user confirmed support for the POS features: billing, barcode scanning, payments, mobile/offline POS, invoicing, returns, loyalty, WhatsApp invoicing, online orders, customer displays, payment reminders, billing templates, image-based billing, self-kiosks, smart carts, scales, estimates, inventory, CRM, accounting, multi-store management and reporting remain.
- Source vendor statistics, ratings, testimonial videos, competitive claims and pricing promises are not attributed to Koda. The VINA advertisement is omitted. Equivalent visual areas use a demo invitation, qualitative benefits, workflow descriptions and the supplied company client logos. Clients are not identified as specific KodaPOS users.
- Dashboard artwork is explicitly illustrative, not a live KodaPOS screenshot. Demo links go to the local Contact page with KodaPOS preselected; no vendor forms, analytics, videos, scripts or remote JS imports are loaded.
- Styling: shared navy **#060173**, gold **#fdb847**, pale background treatment, original client-logo colours. Page-specific CSS/JS are `assets-new/css/koda-pos.css`, `koda-pos-timeline.css` and `assets-new/js/koda-pos.js`.
- QA: 1440 / 768 / 390 / 320px, no JavaScript errors, failed asset responses, broken images (including forced-loaded hidden images), or document overflow. Feature controls, six dashboard states, three carousels, integration tabs, desktop/mobile accordions, enquiry routing and product prefill pass.
- Reports: `review/kodapos-browser.json` and `review/kodapos-interactions.json`. Existing local links were rechecked with no missing destinations or outgoing Vasy links.

This update supersedes the older KodaPOS feature-enquiry-only copy below. Other product scopes remain unchanged. Review build only; no GitHub push or public deployment performed.

---

# Latest update: Koda colours, footer alignment and client-logo sizing

- Main accent: **#060173** (navy).
- Primary action buttons: **#fdb847** (gold), with navy text for readable contrast.
- Light backgrounds, translucent glows and gradient surfaces remain light, using pale navy tints rather than solid navy fills.
- Header/footer wordmarks and the K. monogram use navy lettering with a gold dot. Customer logos retain their original colours.
- Removed the footer template’s negative floating-image offset. The K. mark, project button and office details now remain inside the footer card on desktop and mobile.
- Client-slider logos use `object-fit: contain`, consistent padding and bounded dimensions. Their proportions are preserved; the original animated rows remain.
- Shared final styling is in `vasy.ai/assets-new/css/koda-theme.css`, loaded last by all 11 pages. Earlier site-owned styles/illustrations were also retinted to remove hard-coded cyan while preserving pale-surface brightness.
- Verification: all 11 pages checked at desktop/mobile widths; footer mark containment, exact button colours, logo fit and page overflow checked. Additional homepage checks at 975px and 320px. Menus, local links, product controls, FAQ, email-draft form and hero pagination still pass.
- Evidence: `review/theme-verification.json`, `review/theme-colour-map.json`, and the updated interaction report.

All existing content and layout remain except the requested footer/logo presentation fixes. The site remains a review build; this revision has not been pushed to GitHub or deployed publicly.

---

# Latest update: local company and product pages

The header now links to Koda pages rather than the source vendor. The desktop Products mega-menu and mobile Products submenu contain all six Koda products. The previous homepage sections and animations remain, with shared navigation and footer updated.

## Current pages

- `vasy.ai/index.html` — existing homepage
- `vasy.ai/about-us.html` — original About template, with Koda company profile content
- `vasy.ai/services.html` — six documented Koda service areas, using the template’s components
- `vasy.ai/contact-us.html` — original Contact template, Koda contact details and local email-draft form
- `vasy.ai/products.html` — products overview
- `vasy.ai/kodafreight.html`
- `vasy.ai/kodastocks.html`
- `vasy.ai/kodasms.html`
- `vasy.ai/kodahr-payroll.html`
- `vasy.ai/kodapos.html`
- `vasy.ai/achete.html`

The product detail pages reuse the source product hero, floating-card effects, capability-panel layout and FAQ accordion. Capability images are labelled conceptual illustrations—not fabricated screenshots of Koda products.

## Content and contact decisions

- Confirmed by the owner: `info@kodotechnologies.co.tz`.
- Telephone: +255 710 459 064. Office: Golden Tulip Masaki, Dar es Salaam, Tanzania.
- Achete remains an inquiry-only page, as requested. No unconfirmed product features are asserted.
- KodaPOS is conservative because detailed specifications have not been provided.
- The About template’s unsupported corporate timeline is filled with the documented seven-stage delivery process, not invented dated milestones.
- Source-company team portraits, inflated counts, ratings and certifications have not been rebranded as Koda facts on the new pages. Beneth Emmanuel’s supplied profile portrait is used.
- The Contact page retains its original layout, with factual contact information and capability cards instead of unsupported certification claims.

## Forms and maps

The Contact form validates required fields and email format, prepares a `mailto:` draft, and clearly asks the visitor to review and send it in their email application. No backend submission, CRM integration or automatic email delivery is configured. The decorative chat panel prepares an email too; it is labelled as a message preview, not a live chat agent.

Google Maps is an external embed showing the Golden Tulip Masaki area, with an explicit external map link as fallback. Its availability depends on the visitor’s network/browser.

## Verification

- All 11 pages checked at 1440px and 390px: no browser errors, failed local HTTP requests or broken image assets.
- Additional horizontal-overflow checks at 320px and 768px passed.
- Local links and fragment targets checked: no missing destinations.
- No outgoing `vasy` destinations in page anchors, including header, footer and homepage CTAs.
- Desktop and mobile product menus, product capability controls, FAQs, Contact draft flow, mobile About timeline and existing homepage hero pagination checked.
- See `review/company-pages-browser-checks.json`, `review/company-pages-interactions.json` and `review/company-responsive-checks.json`.

Some template asset paths and internal CSS/JS class names retain the original naming for compatibility; these are not public vendor navigation. Missing mirrored library files were restored into `assets-new/vendor/`, avoiding fragile source `build`/`dist` directory paths.

## Publishing status

This is still a noindex review website, not a public deployment. Remaining previously retained homepage product screenshots/copy can be refined in the next stage. No GitHub changes were pushed. Serve the entire archive root; its `index.html` opens the homepage under `vasy.ai/`. Directory names can be cleaned up at final deployment without changing the approved design.

The material below is the revision history, not the current navigation or section inventory.

---

# Latest update: Achete, section removals and Koda branding

- Renamed the Omnichannel solution tab and its panel label to **Achete**. The existing panel ID, illustration, descriptive copy and tab behaviour are preserved until Achete-specific content is supplied.
- Removed the dedicated VINA promotional banner, Awards and Honors section, and Success Stories section. This does not remove the separate VINA hero slide or every VINA reference elsewhere in the template.
- Changed editable Vasy branding to Koda, header/footer wordmarks to **koda.**, and the hero monogram and favicon to **K.**.
- Kept the other sections and original UI animations intact. Removed the obsolete awards-slider initializer.
- Tested all seven solution tabs, remaining hero-slider initialization, desktop/mobile overflow and browser errors. See `review/sections-update-verification.json`.

This is still a design-review copy. Original product screenshots can contain embedded vendor branding; external destinations, vendor contact details and unreviewed template claims remain pending subsequent content work. The forms remain safely disconnected from vendor submissions. No GitHub push or public deployment has been made.

The notes below are the history of earlier revisions, not the current section count.

---

# Latest update: Koda first slide and client logos

The first hero slide now uses the supplied “Delivering value. / At every step.” headline and the exact “Less manual work…” paragraph. Its existing typography, blue emphasis, slide layout and animations are retained. Slides two and three, the header and hero CTA are unchanged for the next content-editing steps.

Both the five-slot animated client ticker and the lower client-logo sliders now use the six documented Koda clients from the first version: Advanced Tracking and Monitoring System, Epic Express, AfriAdapt, Kanuth Adventure Safaris, Maspro and Vijana Cargo. The ticker retains its original timing and transitions, with selection logic avoiding duplicate clients in simultaneously visible slots.

The source company's “17,000+” count and India endorsement above the lower client logos were replaced by neutral client wording; these are not supported Koda claims. Other template content remains pending review. The design-review form guard and original secondary-site links are unchanged.

See `review/hero-and-clients-update.json` and `review/hero-update-verification.json` for this revision. The preservation-stage notes below describe the original restoration baseline, before this content update.

---

# Homepage preservation — corrected version

This version supersedes the simplified homepage from the earlier `Koda-Technologies-Static-Website.zip` **for homepage design review**. It restores the original Vasy homepage rather than redesigning it.

## Open the homepage

The live preview runs this directory on port 8002. Its root opens `vasy.ai/index.html`.

For a local preview, serve this entire directory (not only the `vasy.ai` subdirectory):

```sh
python -m http.server 8000
```

Open `http://localhost:8000/`. No WordPress, PHP, database, npm installation or build step is required. Preserve the directory layout because the source references locally copied libraries in sibling directories.

## What was preserved

- Original homepage markup, layout, classes and responsive breakpoints.
- All 13 original `<section>` blocks, plus the original client blocks, navigation, footer and other content outside section elements.
- All 12 original modal containers.
- All three hero slides and their original motion/transition logic.
- Original seven solution tabs, industry switcher and sliders.
- Original feature sections, VINA promotion, integrations, clients, awards, testimonials, resources, CTA and footer.
- Original images, videos, buttons, hover effects, animated logo rotation/ticker logic, sliders, cookie notice and popups.
- Original shared CSS, banner CSS and UI JavaScript libraries. They are intentionally retained to preserve the design and interactions; this is not the previous dependency-free rewrite.

No visible homepage section was removed or simplified.

## Only three content changes were made

In `.fy-section-main`:

1. Heading: **Your business has better things to do.**
2. Introduction: **Move beyond repetitive tasks and disconnected systems. Make technology work for your team—not the other way around.**
3. Central image word: **vasy. → koda.**

The original comparison cards, original list content, month labels, circle artwork, original SVG drawing animation, animated side chevrons, CTA button and its arrow animation remain in place. The centre word was edited within a copy of the original image; the original file also remains available.

The two card lists and all other homepage copy have intentionally been left unchanged for the next content-editing stage. The original header logo also remains unchanged at this stage; the requested `koda.` change is specifically applied to the highlighted circle.

## Necessary non-visual differences

- Original analytics, session recording, reCAPTCHA and copyright-on-copy injection are not active in this review version.
- Original Google font families and icon fonts are downloaded locally, not replaced with different fonts.
- Missing images in the HTTrack download were recovered from their original Vasy asset URLs, including the animated logo ticker's ten missing logo files.
- Links to secondary pages omitted from the downloaded homepage package point to the original source-site destinations instead of broken local files. **Those links still leave the Koda review preview.** They are not final Koda navigation.
- Vendor forms still open with their original modal UI, but submission is deliberately intercepted. A clear message states that nothing has been sent. Backend-dependent lead capture, OTP, pricing checkout and delivery are not reproduced or represented as working Koda services.
- The page has `noindex, nofollow`. This is a design-review version, not a completed public company website.
- Only image directories unreferenced by the homepage and its CSS/JS were omitted from the archive. No homepage section was dropped to reduce file size.

A static website can preserve the original interface and animations. It cannot reproduce an unrelated company's server-side services without a separately configured backend.

## Verification

`review/verification.json` records the checks:

- Same section/header/footer/modal structure as the original.
- 13 of 13 section elements and 12 of 12 modals retained.
- Animated circle stroke changes over time (`fill-border`, original duration).
- All three hero slides respond to pagination.
- All seven original product tabs activate their panels.
- Retail/manufacturing switch responds.
- Desktop mega-menu and mobile menu checked.
- Demo modal opens/closes; submission remains safely disabled.
- No broken image assets after forcing image loading during the desktop test.
- No browser JavaScript errors or failed HTTP responses in the tested interactions.
- No horizontal page overflow at the tested 1568px and 390px widths.

This is not a guarantee that every external video or remote destination will remain available, nor a claim of pixel-identical rendering in every browser. The original DOM/CSS/UI code is the basis of the restored design, not a newly approximated layout.

## Next stage

Review the preserved homepage first. Then replace content section by section while retaining these structures and animations. The original clients, testimonials, awards, statistics and certification claims are retained only as template reference content—not verified Koda company claims. Do not publish this review version as the final Koda website without replacing or approving that material.

The earlier Koda content website remains separately saved in `koda-website`; it was not overwritten. No changes have been pushed to GitHub or deployed to the public company domain.

Source design and assets are from the user-supplied repository. Confirm reuse rights before publication. The previously exposed access token was not used in this restoration.
