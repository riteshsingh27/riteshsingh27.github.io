/* =========================================================
   RITESH SINGH — PUBLICATIONS
   =========================================================

   HOW TO USE

   HOME PAGE:
   renderRecentPublications('recentPublications', 5);
   → shows newest 5 publications

   PUBLICATIONS PAGE:
   renderAllPublications('allPublications');
   → shows ALL publications grouped by year

   Add each new publication ONLY ONCE below.
   The list is automatically sorted newest first.
   ========================================================= */


const publicationsData = [

  {
    date: '2026-05-01',
    year: '2026',

    title:
      'Zero-Energy Devices for 6G',

    authors:
      'Ritesh Singh et al.',

    venue:
      'IEEE Internet of Things Magazine',

    url:
      'https://ieeexplore.ieee.org/document/10980490',

    type:
      'Journal / Magazine'
  },


  /* ======================================================
     ADD YOUR NEXT PUBLICATION LIKE THIS:

  {
    date: '2026-04-10',
    year: '2026',

    title:
      'Your publication title',

    authors:
      'Ritesh Singh, Author Two, Author Three',

    venue:
      'Conference or Journal Name',

    url:
      'https://...',

    type:
      'Conference'
  },

     ====================================================== */

];



/* =========================================================
   SORT PUBLICATIONS
   ========================================================= */

function sortedPublications() {

  return [...publicationsData].sort(
    (a, b) =>
      new Date(b.date) - new Date(a.date)
  );

}



/* =========================================================
   BASIC HTML SAFETY
   ========================================================= */

function escapePublicationHtml(value) {

  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

}



/* =========================================================
   HOME PAGE
   SHOW LATEST N PUBLICATIONS
   ========================================================= */

function renderRecentPublications(
  containerId = 'recentPublications',
  limit = 5
) {

  const container =
    document.getElementById(containerId);

  if (!container) return;


  const recent =
    sortedPublications()
      .slice(0, limit);


  container.innerHTML =
    recent.map(pub => `

      <article class="home-publication-item">

        <h3 class="home-publication-title">
          ${escapePublicationHtml(pub.title)}
        </h3>

        <div class="home-publication-meta">

          ${escapePublicationHtml(pub.authors)}

          <span aria-hidden="true"> · </span>

          ${escapePublicationHtml(pub.venue)}

          <span aria-hidden="true"> · </span>

          ${escapePublicationHtml(pub.year)}

        </div>

        ${
          pub.url
            ? `
              <a
                class="home-publication-link"
                href="${escapePublicationHtml(pub.url)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                View publication &#8599;
              </a>
            `
            : ''
        }

      </article>

    `).join('');

}



/* =========================================================
   PUBLICATIONS PAGE
   SHOW ALL PUBLICATIONS GROUPED BY YEAR
   ========================================================= */

function renderAllPublications(
  containerId = 'allPublications'
) {

  const container =
    document.getElementById(containerId);

  if (!container) return;


  const grouped =
    sortedPublications().reduce(
      (groups, publication) => {

        const year =
          publication.year ||
          new Date(publication.date).getFullYear();

        if (!groups[year]) {
          groups[year] = [];
        }

        groups[year].push(publication);

        return groups;

      },
      {}
    );


  const years =
    Object.keys(grouped)
      .sort(
        (a, b) =>
          Number(b) - Number(a)
      );


  container.innerHTML =
    years.map(year => `

      <section
        class="pub-year-section"
        id="year-${year}"
      >

        <h2 class="pub-year">
          ${year}
        </h2>


        <div class="pub-list">

          ${
            grouped[year]
              .map(pub => `

                <article class="pub-card">

                  <div class="pub-card-title">
                    ${escapePublicationHtml(pub.title)}
                  </div>

                  <div class="pub-authors">
                    ${escapePublicationHtml(pub.authors)}
                  </div>

                  <div class="pub-venue">
                    ${escapePublicationHtml(pub.venue)}
                  </div>

                  ${
                    pub.type
                      ? `
                        <div class="pub-type">
                          ${escapePublicationHtml(pub.type)}
                        </div>
                      `
                      : ''
                  }


                  ${
                    pub.url
                      ? `
                        <a
                          class="pub-link"
                          href="${escapePublicationHtml(pub.url)}"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Paper &#8599;
                        </a>
                      `
                      : ''
                  }

                </article>

              `)
              .join('')
          }

        </div>

        <a
          class="back-to-top"
          href="#top"
        >
          Back to top ↑
        </a>

      </section>

    `).join('');

}
