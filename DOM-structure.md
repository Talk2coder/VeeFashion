
# Miva Fashion — DOM Structure

<html>
 ├── <head>
 │    ├── <meta> tags
 │    ├── <title> Vee - Fashion House </title>
 │    ├── <link> ./custom/style.css
 │    ├── <link> ./custom/all.main.css (fontawesome CSS)
 │    ├── <link> ./icon/favicon.png (favicon)
 │    └── <script> ./script/script.js (deferred), AOS script
 │
 └── <body>
      └── <main>
           ├── <header>
           │    ├── Logo (img src="./icon/logo.png")
           │    ├── Navigation menu (ul.nav-links -> li -> a)
           │    └── Menu icon (img src="./icon/menu.png")
           │
           ├── <div class="marquee"> Announcement text (data-text attribute) </div>
           │
           ├── Page-specific sections:
           │    ├── index.html  → Banner / hero, featured products, choose section
           │    ├── about.html  → About text, trustees button
           │    ├── gallery.html → Search input + product grid (./images/gallery-images/)
           │    ├── booking.html → Booking form, .error-mssg, background image
           │    ├── event.html  → Event videos (./media/), descriptions
           │    ├── contact.html → contact blocks, icons (./icon/)
           │    ├── trustees.html → trustees images (./images/trustees-member/)
           │    └── enquire.html  → Enquiry form + customer image
           │
           ├── <footer> → legal, hours, social links, contact details
           │
           └── Asset folders (project root)
                ├── ./images/
                ├── ./media/
                ├── ./custom/
                ├── ./script/
                ├── ./icon/
                └── ./fontawesome/

