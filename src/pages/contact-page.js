function ContactPage() {
  return (
    <div className="container my-3">
      <h2>Contact</h2>
      <div className="d-flex justify-content-center flex-row gap-5 mt-4">
        <div>
          <p><i class="bi bi-telephone-fill me-3` text-secondary"></i>Phone: 1-800-dropandshop</p>
        </div>
        <div>
          <p><i class="bi bi-envelope-fill me-3` text-secondary"></i>Email: D&S@gmail.com</p>
        </div>
        <div>
          <p><i class="bi bi-geo-alt-fill me-3` text-secondary"></i>Address: 2023 Palm Springs Ave, Palm Springs, CA 10028</p>
        </div>
      </div>
      <div className="d-flex flex-row gap-3 mt-4">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <i class="bi bi-person-fill text-primary"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon2">
            <i class="bi bi-envelope-fill text-primary"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon2"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            <i class="bi bi-telephone-fill text-primary"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Phone"
            aria-label="Phone"
            aria-describedby="basic-addon3"
          />
        </div>
      </div>
      <div class="input-group mb-3">
        <textarea
          cols={4}
          rows={5}
          placeholder="Write your message here"
          class="form-control"
          aria-label="With textarea"
        ></textarea>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <button style={{ width: 100 }} className="btn btn-secondary text-white">
          Send
        </button>
      </div>
    </div>
  );
}

export default ContactPage;
