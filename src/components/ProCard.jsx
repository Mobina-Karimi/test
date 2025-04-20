function ProCard({data}) {
    
    const {title, image, language} = data
    return(
        <div>
            <img src={image} alt="" className="MyImage" />
            <span>{title}</span>
            <div>{language}</div>
        </div>
    )
}
export default ProCard;