function replaceComponentTags(input) {
    const componentMap = {};

    const componentRegex = /<component\s+name="(.+?)">([\s\S]*?)<\/component>/g;
    let match;

    while ((match = componentRegex.exec(input)) !== null) {
        const componentName = match[1].trim();
        const componentContent = match[2].trim();
        
        componentMap[componentName] = componentContent;
    }

    let result = input;

    for (const [name, content] of Object.entries(componentMap)) {
        const tagRegex = new RegExp(`<${name}[^>]*>(.*?)<\/${name}>|<${name}[^>]*\/>`, 'g');
        result = result.replace(tagRegex, content);
    }

    result = result.replace(/<component\s+name=".+?">[\s\S]*?<\/component>/g, '');

    return result.trim();
}

module.exports = replaceComponentTags