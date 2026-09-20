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


/* =========================================================
   DATA
   ========================================================= */

const activities = [

  {
    date: '2026-10-25',
    homeText: 'Co-chairing the 3rd EN-IoT Workshop at IEEE SENSORS 2026 in Rotterdam.',
    displayDate: '25 October 2026',
    category: 'Workshop',
    title: '3rd EN-IoT Workshop at IEEE SENSORS 2026',
    description:
      'Co-chairing the third edition of the Workshop on Energy-Neutral & Sustainable IoT Devices and Infrastructure (EN-IoT 2026), held in conjunction with IEEE SENSORS 2026 in Rotterdam.',
    visual: 'standard',
    url: 'https://www.6gflagship.com/event/en-iot-2026/',
    linkLabel: 'Event details'
  },

  {
    date: '2026-08-08',
    homeText: 'Academic collaboration visits to IIT Ropar, IIIT Allahabad and IIIT Surat.',
    displayDate: 'August 2026',
    category: 'Academic Visit',
    title: 'Academic collaboration visits in India',
    description:
      'Visited IIT Ropar, IIIT Allahabad and IIIT Surat for academic collaboration discussions, including research cooperation, faculty interactions and opportunities for student mobility.',
    visual: 'standard',
    url: '',
    linkLabel: 'Read more'
  },

  {
    date: '2026-08-06',
    homeText: 'Visited IIT Kharagpur and the Ubiquitous Networked Systems Lab (UbiNet) to explore research collaboration.',
    displayDate: 'August 2026',
    category: 'Academic Visit',
    title: 'Academic visit to IIT Kharagpur and UbiNet',
    description:
      'Visited IIT Kharagpur and the Ubiquitous Networked Systems Lab (UbiNet) for research discussions and to explore opportunities for collaboration.',
    visual: 'standard',
    url: '',
    linkLabel: 'Read more'
  },

  {
    date: '2026-08-05',
    homeText: 'Research talk at IIT Hyderabad on energy-neutral devices, Ambient IoT and embedded intelligence for 6G.',
    displayDate: 'August 2026',
    category: 'Research Talk',
    title: 'Research talk at IIT Hyderabad',
    description:
      'Delivered a research talk at IIT Hyderabad on energy-neutral devices, Ambient IoT, low-power systems and embedded intelligence for future 6G networks.',
    visual: 'standard',
    url: '',
    linkLabel: 'Read more'
  },

  {
    date: '2026-08-01',
    homeText: 'Joined the SNS JU Sustainability Working Group, contributing to discussions on sustainable future networks.',
    displayDate: 'August 2026',
    category: 'Community',
    title: 'SNS JU Sustainability Working Group',
    description:
      'Contributing to the SNS JU Sustainability Working Group and discussions on sustainable-by-design and sustainable-in-operation approaches for future communication networks.',
    visual: 'standard',
    url: '',
    linkLabel: 'Read more'
  },

  {
    date: '2026-07-01',
    homeText: 'Serving as Belgium Management Committee member for COST Action NERO on extreme wildfire behaviour.',
    displayDate: '2026',
    category: 'Research Network',
    title: 'Management Committee member for COST Action NERO',
    description:
      'Serving as a Management Committee member representing Belgium in COST Action NERO, a European research network focused on extreme wildfire behaviour.',
    visual: 'standard',
    url: 'https://nero-network.eu/management-committee',
    linkLabel: 'Management Committee'
  },

  {
    date: '2026-06-01',
    homeText: 'Task Lead for IoT research in BEL6GICA, Belgium’s 6G flagship project.',
    displayDate: '2026',
    category: 'Project',
    title: 'Task Lead for IoT research in BEL6GICA',
    description:
      'Leading IoT research activities within BEL6GICA around low-power radios, energy harvesting and power management, sustainable device operation and future energy-neutral device classes.',
    visual: 'standard',
    url: 'https://6g.be/',
    linkLabel: 'Project details'
  },

  {
    date: '2025-10-01',
    homeText: 'Demo and T&V Chair at IEEE Future Networks World Forum 2025.',
    displayDate: '2025',
    category: 'Conference Service',
    title: 'Demo and T&V Chair at IEEE Future Networks World Forum 2025',
    description:
      'Served as Demo and Test & Validation (T&V) Chair at the IEEE Future Networks World Forum 2025.',
    visual: 'standard',
    url: '',
    linkLabel: 'Read more'
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

  const homeText =
    activity.homeText ||
    activity.title ||
    activity.description ||
    '';

  const textHtml =
    activity.url
      ? `<a href="${escapeActivityHtml(activity.url)}">${escapeActivityHtml(homeText)}</a>`
      : escapeActivityHtml(homeText);

  return `
    <article class="timeline-entry">

      <span
        class="timeline-dot"
        aria-hidden="true"
      ></span>

      <div class="activity-compact-card">

        <div class="activity-compact-date">
          ${escapeActivityHtml(activity.displayDate)}
        </div>

        <div class="activity-compact-text">
          ${textHtml}
        </div>

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
      .filter(
        activity =>
          activity.showOnHome !== false
      )
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
