const inject = (items, sections) => {
    sections.map((section, index) => {
        items.splice(section.index + index, 0, section.content)
    })

    return items;
}
export { inject };
