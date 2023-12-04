function Subscribe() {
  return (
    <div style={{width: 700}} className="d-flex flex-row">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
        <i class="bi bi-envelope-fill"></i>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Enter your email"
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
      <button className="btn btn-secondary text-white ms-2">Subscribe</button>
      </div>
    </div>
  );
}

export default Subscribe;
