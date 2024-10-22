/* global instantsearch, algoliasearch */
// eslint-disable-next-line no-unused-vars
function loadAlgolia(config, translation) {

  const $main = $('.searchbox');
  const $input = $main.find('.searchbox-input');
  const $container = $main.find('.searchbox-body');

  const search = instantsearch({
    indexName: config.indexName,
    searchClient: algoliasearch(config.applicationId, config.apiKey),
  });

  search.addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: 20,
      attributesToSnippet: ['excerpt'],
    }),
  ]);

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#algolia-input',
      placeholder: translation.hint,
      showReset: false,
      showSubmit: false,
      showLoadingIndicator: false,
      cssClasses: {
        root: 'searchbox-input-container',
        form: 'searchbox-input-container',
        input: 'searchbox-input',
      },
    }),
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: '.searchbox-body',
      escapeHTML: false,
      cssClasses: {
        root: 'searchbox-result-container',
        emptyRoot: ['searchbox-result-item', 'disabled'],
      },
      templates: {
        empty: function (results) {
          return translation.no_result + ': ' + results.query;
        },
        item: function (hit) {
          let title = instantsearch.highlight({ attribute: 'title', hit });
          let excerpt = instantsearch.highlight({ attribute: 'excerpt', hit });
          title = title ? title : translation.untitled;
          excerpt = excerpt
            .replace(new RegExp('<em>', 'ig'), '[algolia-highlight]')
            .replace(new RegExp('</em>', 'ig'), '[/algolia-highlight]')
            .replace(/(<([^>]+)>)/gi, '')
            .replace(/(\[algolia-highlight\])/gi, '<em>')
            .replace(/(\[\/algolia-highlight\])/gi, '</em>');
          excerpt = excerpt ? excerpt : translation.empty_preview;
          return `<section class="searchbox-result-section">
                        <a class="searchbox-result-item" href="${hit.permalink}">
                            <span class="searchbox-result-content">
                                <span class="searchbox-result-title">${title}</span>
                                <span class="searchbox-result-preview">${excerpt}</span>
                            </span>
                        </a>
                    </section>`;
        },
      },
    }),
  );

  search.addWidget(
    instantsearch.widgets.pagination({
      container: '.searchbox-footer',
      cssClasses: {
        list: 'searchbox-pagination',
        item: 'searchbox-pagination-item',
        link: 'searchbox-pagination-link',
        selectedItem: 'active',
        disabledItem: 'disabled',
      },
      scrollTo: false
    }),
  );

  search.start();

  if (location.hash.trim() === '#algolia-search') {
    $('.searchbox').addClass('show');
  }

  document.querySelectorAll('.searchbox-pagination-link').forEach(link => {
    link.setAttribute('href', '/');
  });

  function selectItemByDiff(value) {
    const $items = $.makeArray($container.find('.searchbox-result-item'));
    let prevPosition = -1;

    $items.forEach((item, index) => {
        if ($(item).hasClass('active')) {
            prevPosition = index;
        }
    });

    let nextPosition = (prevPosition + value) % $items.length;

    // Nếu cuộn từ item cuối về item đầu
    if (nextPosition < 0) {
        nextPosition = $items.length - 1; // quay về item cuối
    }

    $($items[prevPosition]).removeClass('active');
    $($items[nextPosition]).addClass('active');
    
    // Nếu nextPosition là 0 (item đầu tiên), cuộn về đầu
    if (nextPosition === 0) {
        $container.scrollTop(0);
    } else {
        scrollTo($($items[nextPosition]));
    }
  }

  function scrollTo($item) {
    if ($item.length === 0) return;

    const container = $container[0];
    const containerHeight = container.clientHeight;
    const itemTop = $item.position().top + $container.scrollTop();
    const itemHeight = $item.outerHeight();

    // Kiểm tra nếu item nằm ngoài vùng nhìn thấy
    if (itemTop + itemHeight > containerHeight + $container.scrollTop()) {
        // Cuộn xuống để item nằm ở vị trí cuối cùng trong container
        $container.scrollTop(itemTop + itemHeight - containerHeight);
    } else if (itemTop < $container.scrollTop()) {
        // Cuộn lên để item nằm ở vị trí đầu tiên trong container
        $container.scrollTop(itemTop);
    } else if ($item.is(':first-child') && $item.hasClass('active')) {
        // Nếu item là item đầu tiên và đang active, cuộn lên về vị trí đầu
        $container.scrollTop(0);
    }
  }

  function gotoLink($item) {
    if ($item && $item.length) {
      location.href = $item.attr('href');
    }
  }

  $(document)
    .on('click', '.navbar-main .search', () => {
      $('.searchbox').toggleClass('show');
      $('.searchbox-input').focus();
    })
    .on('click', '.searchbox .searchbox-mask', () => {
      $('.searchbox').removeClass('show');
    })
    .on('click', '.searchbox-close', () => {
      $('.searchbox').removeClass('show');
    })
    .on('keydown', (e) => {
      if (!$main.hasClass('show')) return;
      switch (e.keyCode) {
        case 27: // ESC
          $main.removeClass('show');
          break;
        case 38: // UP
          selectItemByDiff(-1);
          break;
        case 40: // DOWN
          selectItemByDiff(1);
          break;
        case 13: // ENTER
          gotoLink($container.find('.searchbox-result-item.active').eq(0));
          break;
      }
    })
    .on('touchstart', (e) => {
      touch = true;
    })
    .on('touchmove', (e) => {
      touch = false;
    });
}
