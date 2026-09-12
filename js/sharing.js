/* =========================================================
   RITESH SINGH — WORTH SHARING
   =========================================================

   This file powers the "Worth Sharing" section on Home.

   Supported types:
   - quote
   - article
   - image
   - paper
   - resource

   Add as many items as you want.

   Home displays ONE item at a time.
   Use Previous / Next buttons to browse.

   IMPORTANT:
   For external quotes, articles, papers, etc.,
   include the correct source/author and URL.
   ========================================================= */


/* =========================================================
   DATA
   ========================================================= */

const sharingData = [

  /* =======================================================
     EXAMPLE 1 — ARTICLE
     ======================================================= */

  {
    type: 'article',

    title:
      'An interesting article or idea worth sharing',

    source:
      'Source / Author',

    note:
      'A short personal note explaining why I found this interesting and why it may also be relevant to people working in connected systems, computing, sustainability, future IoT or 6G.',

    image:
      '',

    url:
      ''
  },


  /* =======================================================
     EXAMPLE 2 — QUOTE
     ======================================================= */

  {
    type: 'quote',

    quote:
      'Add a quote here that you find interesting, thoughtful or relevant.',

    author:
      'Author',

    source:
      '',

    url:
      ''
  },


  /* =======================================================
     EXAMPLE 3 — RECOMMENDED PAPER / READING
     ======================================================= */

  {
    type: 'paper',

    title:
      'A paper, book or research article worth reading',

    source:
      'Author / Journal / Publisher',

    note:
      'Add two or three sentences explaining what caught your attention and why you think visitors to your site might find it useful.',

    image:
      '',

    url:
      ''
  },


  /* =======================================================
     EXAMPLE 4 — IMAGE / PHOTO
     ======================================================= */

  {
    type: 'image',

    title:
      'A photograph, figure or visual worth sharing',

    note:
      'A short thought, observation or context related to the image.',

    image:
      '',

    url:
      ''
  },


  /* =======================================================
     EXAMPLE 5 — RESOURCE
     ======================================================= */

  {
    type: 'resource',

    title:
      'A useful resource worth a look',

    source:
      'Website / Organization / Author',

    note:
      'Use this format for a useful website, dataset, tool, talk, report, standardization resource or other reference that you think is worth sharing.',

    image:
      '',

    url:
      ''
  }

];



/* =========================================================
   CURRENT ITEM
   ========================================================= */

let currentSharingIndex = 0;



/* =========================================================
   HTML SAFETY
   ========================================================= */

function escapeSharingHtml(value) {

  return String(value ?? '')

    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

}



/* =========================================================
   TYPE LABEL
   ========================================================= */

function sharingTypeLabel(type) {

  switch (type) {

    case 'article':
      return 'Interesting Read';

    case 'paper':
      return 'Recommended Reading';

    case 'resource':
      return 'Worth a Look';

    case 'image':
      return 'Visual Note';

    case 'quote':
      return 'Quote';

    default:
      return 'Worth Sharing';

  }

}



/* =========================================================
   SINGLE CARD TEMPLATE
   ========================================================= */

function sharingTemplate(item) {

  /* =======================================================
     QUOTE
     ======================================================= */

  if (item.type === 'quote') {

    return `
      <article class="sharing-card sharing-quote-card">

        <div
          class="sharing-quote-mark"
          aria-hidden="true"
        >
          “
        </div>


        <blockquote class="sharing-quote-text">

          ${escapeSharingHtml(item.quote)}

        </blockquote>


        ${
          item.author
            ? `
              <div class="sharing-author">
                — ${escapeSharingHtml(item.author)}
              </div>
            `
            : ''
        }


        ${
          item.source
            ? `
              <div class="sharing-source">
                ${escapeSharingHtml(item.source)}
              </div>
            `
            : ''
        }


        ${
          item.url
            ? `
              <a
                class="sharing-link"
                href="${escapeSharingHtml(item.url)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source &#8599;
              </a>
            `
            : ''
        }

      </article>
    `;

  }



  /* =======================================================
     IMAGE
     ======================================================= */

  if (item.type === 'image') {

    return `
      <article class="sharing-card">

        ${
          item.image
            ? `
              <div class="sharing-image-wrap">

                <img
                  class="sharing-feature-image"
                  src="${escapeSharingHtml(item.image)}"
                  alt="${escapeSharingHtml(
                    item.title || 'Worth sharing'
                  )}"
                  loading="lazy"
                >

              </div>
            `
            : ''
        }


        <div class="sharing-content">

          <div class="sharing-type">
            ${sharingTypeLabel(item.type)}
          </div>


          ${
            item.title
              ? `
                <h3 class="sharing-title">
                  ${escapeSharingHtml(item.title)}
                </h3>
              `
              : ''
          }


          ${
            item.note
              ? `
                <p class="sharing-note">
                  ${escapeSharingHtml(item.note)}
                </p>
              `
              : ''
          }


          ${
            item.url
              ? `
                <a
                  class="sharing-link"
                  href="${escapeSharingHtml(item.url)}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore &#8599;
                </a>
              `
              : ''
          }

        </div>

      </article>
    `;

  }



  /* =======================================================
     ARTICLE / PAPER / RESOURCE
     ======================================================= */

  return `
    <article class="sharing-card">

      ${
        item.image
          ? `
            <div class="sharing-thumb-wrap">

              <img
                class="sharing-thumb"
                src="${escapeSharingHtml(item.image)}"
                alt="${escapeSharingHtml(
                  item.title || 'Worth sharing'
                )}"
                loading="lazy"
              >

            </div>
          `
          : ''
      }


      <div class="sharing-content">

        <div class="sharing-type">
          ${sharingTypeLabel(item.type)}
        </div>


        ${
          item.title
            ? `
              <h3 class="sharing-title">
                ${escapeSharingHtml(item.title)}
              </h3>
            `
            : ''
        }


        ${
          item.source
            ? `
              <div class="sharing-source">
                ${escapeSharingHtml(item.source)}
              </div>
            `
            : ''
        }


        ${
          item.note
            ? `
              <p class="sharing-note">
                ${escapeSharingHtml(item.note)}
              </p>
            `
            : ''
        }


        ${
          item.url
            ? `
              <a
                class="sharing-link"
                href="${escapeSharingHtml(item.url)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                ${
                  item.type === 'article'
                    ? 'Read Article'
                    : item.type === 'paper'
                    ? 'Read / View'
                    : 'Explore'
                }
                &#8599;
              </a>
            `
            : ''
        }

      </div>

    </article>
  `;

}



/* =========================================================
   RENDER WORTH SHARING
   ========================================================= */

function renderWorthSharing(
  containerId = 'worthSharing'
) {

  const container =
    document.getElementById(containerId);


  if (!container) {
    return;
  }


  if (!sharingData.length) {

    container.innerHTML = `
      <p class="sharing-empty">
        Nothing shared yet.
      </p>
    `;

    return;
  }


  if (
    currentSharingIndex < 0 ||
    currentSharingIndex >= sharingData.length
  ) {

    currentSharingIndex = 0;

  }


  container.innerHTML =
    sharingTemplate(
      sharingData[currentSharingIndex]
    );


  updateSharingCounter();

}



/* =========================================================
   NEXT ITEM
   ========================================================= */

function nextSharing() {

  if (!sharingData.length) {
    return;
  }


  currentSharingIndex =
    (
      currentSharingIndex + 1
    ) % sharingData.length;


  renderWorthSharing();

}



/* =========================================================
   PREVIOUS ITEM
   ========================================================= */

function previousSharing() {

  if (!sharingData.length) {
    return;
  }


  currentSharingIndex =
    (
      currentSharingIndex -
      1 +
      sharingData.length
    ) % sharingData.length;


  renderWorthSharing();

}



/* =========================================================
   GO TO SPECIFIC ITEM
   Optional helper if you later add dots
   ========================================================= */

function goToSharing(index) {

  if (
    index < 0 ||
    index >= sharingData.length
  ) {
    return;
  }


  currentSharingIndex = index;

  renderWorthSharing();

}



/* =========================================================
   COUNTER
   ========================================================= */

function updateSharingCounter() {

  const counter =
    document.getElementById(
      'sharingCounter'
    );


  if (!counter) {
    return;
  }


  counter.textContent =
    `${currentSharingIndex + 1} / ${sharingData.length}`;

}



/* =========================================================
   OPTIONAL KEYBOARD SUPPORT

   If the visitor is focused on the sharing controls:
   Left arrow  = previous
   Right arrow = next
   ========================================================= */

document.addEventListener(
  'keydown',
  function(event) {

    const section =
      document.querySelector(
        '.worth-sharing-section'
      );


    if (!section) {
      return;
    }


    if (
      !section.contains(
        document.activeElement
      )
    ) {
      return;
    }


    if (event.key === 'ArrowLeft') {

      previousSharing();

    }


    if (event.key === 'ArrowRight') {

      nextSharing();

    }

  }
);
