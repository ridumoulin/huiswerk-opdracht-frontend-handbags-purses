function CustomTile({title, children, brandPicture}) {
    return (
        <section>
            {brandPicture && <img src={brandPicture} alt="Image brand" />}
            {title && <h2>{title}</h2>}
            {children}
        </section>
    )
}

export default CustomTile;
