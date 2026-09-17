/* =========================================================
   RITESH SINGH — ACTIVITIES DATA + RENDERING
   =========================================================

   HOW IT WORKS

   index.html:
   renderHomeActivities('homeActivities', 10);
   → shows latest 10 activities only.

   updates.html:
   renderAllActivities('allActivities');
   → shows ALL activities, grouped by year.

   AVAILABLE VISUAL STYLES

   visual: 'standard'
   → text only

   visual: 'image'
   → one event/photo image

   visual: 'featured'
   → large cover image with caption

   visual: 'gallery'
   → collage with up to 3 images

   IMPORTANT:
   Only add image paths after uploading the images to:
   images/activities/
   ========================================================= */


const activities = [

  /* =======================================================
     1. EN-IoT 2026
     Good candidate for a FEATURED cover photo later
     ======================================================= */

  {
    date: '2026-10-25',
    homeText: 'Co-organizing the third edition of EN-IoT at IEEE SENSORS 2026, Rotterdam.',
    displayDate: '25 October 2026',
    category: 'Workshop',

    title: 'EN-IoT 2026 at IEEE SENSORS 2026',

    description:
      'Co-organizing the third edition of the Workshop on Energy-Neutral & Sustainable IoT Devices and Infrastructure at IEEE SENSORS 2026 in Rotterdam, bringing together research on energy harvesting, battery-less systems, Ambient IoT, ultra-low-power communication and sustainable connected devices.',

    visual: 'standard',

    /*
    WHEN YOU HAVE A COVER PHOTO:

    Change:

    visual: 'standard'

    to:

    visual: 'featured'

    Then uncomment this block:

    media: {
      images: [
        'images/activities/en-iot-2026.jpg'
      ],

      caption:
        'IEEE SENSORS 2026 · Rotterdam · 25 October 2026',

      alt:
        'EN-IoT 2026 workshop at IEEE SENSORS 2026'
    },
    */

    url: '',
    linkLabel: 'Event details'
  },


  /* =======================================================
     2. INDIA ACADEMIC VISIT
     Excellent candidate for GALLERY
     ======================================================= */

  {
    date: '2026-08-08',
    homeText: 'Research seminars and collaboration visits across leading IITs and IIITs in India.',
    displayDate: '2–8 August 2026',
    category: 'Academic Visit',

    title:
      'Research collaboration visits across leading institutes in India',

    description:
      'Visited IITs and IIITs for research seminars, faculty discussions and collaboration meetings around Ambient IoT, energy-neutral devices, embedded intelligence, 6G, student mobility and future joint research activities.',

    visual: 'standard',

    /*
    WHEN YOU HAVE 2–3 PHOTOS:

    Change:

    visual: 'standard'

    to:

    visual: 'gallery'

    Then uncomment:

    media: {
      images: [
        'images/activities/india-visit-1.jpg',
        'images/activities/india-visit-2.jpg',
        'images/activities/india-visit-3.jpg'
      ],

      caption:
        'Academic collaboration visits · India · August 2026',

      alt:
        'Research collaboration visits across institutes in India'
    },
    */

    url: '',
    linkLabel: 'Read more'
  },


  /* =======================================================
     3. SNS JU SUSTAINABILITY WG
     Text-only recommended
     ======================================================= */

  {
    date: '2026-08-01',
    homeText: 'Contributing to the SNS JU Sustainability Working Group on sustainable future networks.',
    displayDate: 'August 2026',
    category: 'Community',

    title:
      'SNS JU Sustainability Working Group',

    description:
      'Contributing to discussions on sustainability for next-generation communication systems, including sustainable-by-design and sustainable-in-operation approaches for future 6G networks and connected devices.',

    visual: 'standard',

    url: '',
    linkLabel: 'Read more'
  },


  /* =======================================================
     4. AMBIENT-6G
     Text-only recommended
     ======================================================= */

  {
    date: '2026-07-20',
    homeText: 'Advancing energy-neutral Ambient IoT research through AMBIENT-6G.',
    displayDate: 'July 2026',
    category: 'Project',

    title:
      'AMBIENT-6G research on energy-neutral Ambient IoT',

    description:
      'Contributing to research on standardized 6G connectivity for ambiently powered energy-neutral IoT devices, spanning low-power communication, energy-aware operation, embedded intelligence and scalable future deployments.',

    visual: 'standard',

    url: '',
    linkLabel: 'Project details'
  },


  /* =======================================================
     5. EuCNC / SUSTAINABILITY WORKSHOP
     Good candidate for ONE event photo
     ======================================================= */

  {
    date: '2026-06-30',
    homeText: 'Co-organized the Sustainable by Design, Sustainable in Operation workshop on 6G.',
    displayDate: 'June 2026',
    category: 'Workshop',

    title:
      'Sustainable by Design, Sustainable in Operation: The 6G Perspective',

    description:
      'Co-organized a workshop bringing together device, network and application perspectives on how future communication systems can be made more sustainable by design and during operation.',

    visual: 'standard',

    /*
    WHEN YOU HAVE A WORKSHOP PHOTO:

    Change:

    visual: 'standard'

    to:

    visual: 'image'

    Then uncomment:

    media: {
      images: [
        'images/activities/eucnc-sustainability-workshop.jpg'
      ],

      caption:
        'Workshop on sustainable 6G systems',

      alt:
        'Workshop on sustainable-by-design and sustainable-in-operation 6G'
    },
    */

    url: '',
    linkLabel: 'Workshop details'
  },


  /* =======================================================
     6. PUBLICATION
     Keep text-only
     ======================================================= */

  {
    date: '2026-05-20',
    homeText: 'Published research on Zero-Energy Devices for sustainable and scalable future 6G systems.',
    displayDate: '2026',
    category: 'Publication',

    title:
      'Zero-Energy Devices for 6G',

    description:
      'Research on Zero-Energy Devices exploring how energy harvesting, ultra-low-power communication, energy-aware computing and embedded intelligence can enable sustainable and scalable future IoT systems.',

    visual: 'standard',

    url: 'publications.html',
    linkLabel: 'View publication'
  },


  /* =======================================================
     7. EUROPEAN 6G RESEARCH
     ======================================================= */

  {
    date: '2026-04-15',
    homeText: 'Advancing energy-neutral and Ambient IoT research across European 6G projects.',
    displayDate: '2026',
    category: 'Research',

    title:
      'Energy-neutral and Ambient IoT research across European 6G projects',

    description:
      'Advancing low-power communication, intermittent and energy-aware computing, and scalable intelligent devices through AMBIENT-6G, BEL6GICA, Hexa-X-II and related research activities.',

    visual: 'standard',

    url: 'projects.html',
    linkLabel: 'View projects'
  },


  /* =======================================================
     8. RESEARCH DIRECTION
     ======================================================= */

  {
    date: '2026-03-15',
    homeText: 'Developing scalable intelligent systems that adapt operation to available harvested energy.',
    displayDate: '2026',
    category: 'Research',

    title:
      'Towards scalable intelligent Energy-Neutral systems',

    description:
      'Developing a research direction that connects energy availability, sensing, communication, computing and learning so constrained devices can adapt their behaviour to harvested and available energy.',

    visual: 'standard',

    url: '',
    linkLabel: 'Read more'
  },


  /* =======================================================
     9. BEL6GICA
     ======================================================= */

  {
    date: '2026-02-20',
    homeText: 'Leading low-power IoT and energy-neutral device research within BEL6GICA.',
    displayDate: '2026',
    category: 'Project',

    title:
      'BEL6GICA research on low-power IoT for future 6G',

    description:
      'Leading IoT research activities around low-power radios, energy harvesting and power management, sustainable device operation and future energy-neutral device classes within Belgian 6G research.',

    visual: 'standard',

    url: 'projects.html',
    linkLabel: 'View projects'
  },


  /* =======================================================
     10. EMBEDDED INTELLIGENCE
     ======================================================= */

  {
    date: '2026-01-20',
    homeText: 'Exploring TinyML, TinyOL and distributed intelligence for highly energy-constrained devices.',
    displayDate: '2026',
    category: 'Research',

    title:
      'Embedded intelligence for highly energy-constrained devices',

    description:
      'Exploring TinyML, TinyOL and distributed edge intelligence for devices that must dynamically balance sensing, computing, learning and communication under tight and varying energy budgets.',

    visual: 'standard',

    url: '',
    linkLabel: 'Read more'
  },


  /* =======================================================
     11. CORRELATE

     This demonstrates the automatic behaviour.

     Since Home shows only 10 activities, this activity will
     NOT appear on Home while there are 10 newer activities.

     It WILL automatically remain on updates.html.
     ======================================================= */

  {
    date: '2025-11-01',
    homeText: 'Researching closed-loop energy-aware Industrial IoT through CORRELATE.',
    displayDate: '2025',
    category: 'Project',

    title:
      'CORRELATE: closed-loop energy-aware industrial IoT',

    description:
      'Research on a closed-loop platform for energy-aware Industrial IoT, connecting low-power sensing, communication and system-level adaptation for more sustainable deployments.',

    visual: 'standard',

    url: 'projects.html',
    linkLabel: 'View project'
  }

];



/* =========================================================
   SORT ACTIVITIES
   ========================================================= */

function sortedActivities() {

  return [...activities].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

}



/* =========================================================
   BASIC HTML SAFETY
   ========================================================= */

function escapeActivityHtml(value) {

  return String(value ?? '')

    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

}



/* =========================================================
   ACTIVITY LINK
   ========================================================= */

function activityLink(activity, cssClass) {

  if (!activity.url) return '';

  return `
    <a
      class="${cssClass}"
      href="${escapeActivityHtml(activity.url)}"
    >
      ${escapeActivityHtml(
        activity.linkLabel || 'Read more'
      )} &#8599;
    </a>
  `;

}



/* =========================================================
   ACTIVITY IMAGES / MEDIA
   ========================================================= */

function activityMedia(activity, context = 'home') {

  const media = activity.media;

  if (
    !media ||
    !Array.isArray(media.images) ||
    media.images.length === 0
  ) {
    return '';
  }


  const images =
    media.images.filter(Boolean);


  if (!images.length) {
    return '';
  }


  const alt =
    escapeActivityHtml(
      media.alt ||
      activity.title ||
      'Activity image'
    );


  const caption =
    escapeActivityHtml(
      media.caption || ''
    );


  const visual =
    activity.visual || 'image';



  /* =======================================================
     FEATURED COVER
     ======================================================= */

  if (visual === 'featured') {

    return `
      <figure class="activity-visual activity-featured">

        <img
          src="${escapeActivityHtml(images[0])}"
          alt="${alt}"
          loading="lazy"
        >

        ${
          caption
            ? `<figcaption>${caption}</figcaption>`
            : ''
        }

      </figure>
    `;

  }



  /* =======================================================
     PHOTO GALLERY
     ======================================================= */

  if (visual === 'gallery') {

    const first =
      images[0];

    const second =
      images[1] || images[0];

    const third =
      images[2] ||
      images[1] ||
      images[0];


    const extra =
      Math.max(
        0,
        images.length - 3
      );


    return `
      <figure class="activity-visual activity-gallery">

        <div class="activity-gallery-main">

          <img
            src="${escapeActivityHtml(first)}"
            alt="${alt}"
            loading="lazy"
          >

        </div>


        <div class="activity-gallery-side">

          <img
            src="${escapeActivityHtml(second)}"
            alt="${alt}"
            loading="lazy"
          >


          <div class="activity-gallery-last">

            <img
              src="${escapeActivityHtml(third)}"
              alt="${alt}"
              loading="lazy"
            >

            ${
              extra > 0
                ? `
                  <span class="activity-gallery-count">
                    +${extra}
                  </span>
                `
                : ''
            }

          </div>

        </div>


        ${
          caption
            ? `<figcaption>${caption}</figcaption>`
            : ''
        }

      </figure>
    `;

  }



  /* =======================================================
     SINGLE EVENT IMAGE
     ======================================================= */

  return `
    <figure
      class="
        activity-visual
        activity-single-image
        ${
          context === 'updates'
            ? 'activity-single-image-wide'
            : ''
        }
      "
    >

      <img
        src="${escapeActivityHtml(images[0])}"
        alt="${alt}"
        loading="lazy"
      >

      ${
        caption
          ? `<figcaption>${caption}</figcaption>`
          : ''
      }

    </figure>
  `;

}



/* =========================================================
   HOME ACTIVITY TEMPLATE
   ========================================================= */

function homeActivityTemplate(activity) {
  const homeText = activity.homeText || activity.title || activity.description || '';
  const textHtml = activity.url ? `<a href="${escapeActivityHtml(activity.url)}">${escapeActivityHtml(homeText)}</a>` : escapeActivityHtml(homeText);
  return `
    <article class="timeline-entry">
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="activity-compact-card">
        <div class="activity-compact-date">${escapeActivityHtml(activity.displayDate)}</div>
        <div class="activity-compact-text">${textHtml}</div>
      </div>
    </article>
  `;
}


/* =========================================================
   UPDATES PAGE ACTIVITY TEMPLATE
   ========================================================= */

function updateActivityTemplate(activity) {

  return `
    <article class="update-entry">

      <span
        class="update-dot"
        aria-hidden="true"
      ></span>


      <div class="update-topline">

        <span class="update-date">
          ${escapeActivityHtml(
            activity.displayDate
          )}
        </span>

        <span class="update-tag">
          ${escapeActivityHtml(
            activity.category
          )}
        </span>

      </div>


      <h3 class="update-title">
        ${escapeActivityHtml(
          activity.title
        )}
      </h3>


      <p class="update-text">
        ${escapeActivityHtml(
          activity.description
        )}
      </p>


      ${activityMedia(
        activity,
        'updates'
      )}


      ${activityLink(
        activity,
        'update-inline-link'
      )}

    </article>
  `;

}



/* =========================================================
   HOME PAGE
   SHOW ONLY THE LATEST ACTIVITIES
   ========================================================= */

function renderHomeActivities(
  containerId = 'homeActivities',
  limit = 10
) {

  const container =
    document.getElementById(
      containerId
    );


  if (!container) {
    return;
  }


  const latest =
    sortedActivities()
      .slice(0, limit);


  container.innerHTML =
    latest
      .map(homeActivityTemplate)
      .join('');

}



/* =========================================================
   UPDATES PAGE
   SHOW ALL ACTIVITIES GROUPED BY YEAR
   ========================================================= */

function renderAllActivities(
  containerId = 'allActivities'
) {

  const container =
    document.getElementById(
      containerId
    );


  if (!container) {
    return;
  }


  const grouped =
    sortedActivities()
      .reduce(
        (groups, activity) => {

          const year =
            new Date(
              activity.date
            ).getFullYear();


          if (!groups[year]) {
            groups[year] = [];
          }


          groups[year].push(
            activity
          );


          return groups;

        },
        {}
      );


  const years =
    Object.keys(grouped)
      .sort(
        (a, b) =>
          Number(b) -
          Number(a)
      );


  container.innerHTML =
    years
      .map(
        year => `

          <section class="updates-year">

            <h2 class="updates-year-title">
              ${year}
            </h2>


            <div class="updates-timeline">

              ${
                grouped[year]
                  .map(
                    updateActivityTemplate
                  )
                  .join('')
              }

            </div>

          </section>

        `
      )
      .join('');

}
