const Card = ({ title, text, imageUrl, techStack, demo, code }) => {
  return (
    <div class="card h-100 card-hover" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="ratio ratio-16x9">
        <img src={imageUrl} class="card-img-top" alt="appLogo" />
      </div>
      <div class="card-body">
        <h5
          class="text-muted-on-dark"
          style={{ color: "whitesmoke", fontSize: "1.3rem" }}
        >
          {title}
        </h5>
        <p class="text-muted-on-dark">{text}</p>
        <div className="d-flex flex-wrap gap-2">
          {techStack?.map((item) => (
            <h6>
              <span class="badge text-bg-secondary">{item}</span>
            </h6>
          ))}
        </div>
        <a href={demo} class="btn btn-outline-dark mt-2">
          <span style={{ color: "whitesmoke" }}>
            <i class="bi bi-eye me-1"></i>
            Demo
          </span>
        </a>
        <a href={code} class="btn btn-outline-dark mt-2 ms-3">
          <span style={{ color: "whitesmoke" }}>
            <i class="bi bi-code-slash me-1"></i>
            Code
          </span>
        </a>
      </div>
    </div>
  );
};
export default Card;
