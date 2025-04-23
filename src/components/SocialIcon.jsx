function SocialIcon({ defaultIcon, hoverIcon, alt }) {
    return (
      <img 
        src={defaultIcon}
        onMouseEnter={e => e.currentTarget.src = hoverIcon}
        onMouseLeave={e => e.currentTarget.src = defaultIcon}
        alt={alt}
        className="social-icon"
      />
    )
  }
  
  export default SocialIcon
  