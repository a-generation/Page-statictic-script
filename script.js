// Set export = true to download the output as a JSON file, false to only log it to the console
const exportToFile = true;

(function () {
    const pageInfo = {
        url: window.location.href,
        title: document.title,
        characterSet: document.characterSet,
        referrer: document.referrer,
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
        },
        elementsCount: {
            total: document.querySelectorAll('*').length,
            byTagName: {},
        },
        scripts: [],
        links: [],
        images: [],
        stylesheets: [],
        metaTags: [],
    };

    document.querySelectorAll('*').forEach(el => {
        const tagName = el.tagName.toLowerCase();
        pageInfo.elementsCount.byTagName[tagName] = (pageInfo.elementsCount.byTagName[tagName] || 0) + 1;
    });

    document.querySelectorAll('script').forEach(script => {
        pageInfo.scripts.push({
            src: script.src || 'inline',
            async: script.async,
            defer: script.defer,
            type: script.type || 'text/javascript',
        });
    });

    document.querySelectorAll('a').forEach(link => {
        pageInfo.links.push({
            href: link.href,
            text: link.textContent.trim(),
            target: link.target,
        });
    });

    document.querySelectorAll('img').forEach(img => {
        pageInfo.images.push({
            src: img.src,
            alt: img.alt,
            width: img.width,
            height: img.height,
        });
    });

    document.querySelectorAll('link[rel="stylesheet"]').forEach(stylesheet => {
        pageInfo.stylesheets.push({
            href: stylesheet.href,
            media: stylesheet.media || 'all',
        });
    });

    document.querySelectorAll('meta').forEach(meta => {
        pageInfo.metaTags.push({
            name: meta.name || meta.getAttribute('property') || '',
            content: meta.content,
        });
    });

    console.log(pageInfo);

    const elementSizes = [...document.querySelectorAll('*')].map(el => {
        const rect = el.getBoundingClientRect();
        return {
            tagName: el.tagName,
            width: rect.width,
            height: rect.height,
            top: rect.top,
            left: rect.left,
        };
    });

    console.log('Element sizes:', elementSizes);

    if (exportToFile) {
        const data = {
            pageInfo,
            elementSizes,
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'page_info.json';
        a.click();
        URL.revokeObjectURL(url);
    }
})();
