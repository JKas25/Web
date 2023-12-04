function Footer() {
  return (
    <div class="bg-primary p-5 text-white">
      <footer class="py-5">
        <div class="row gap-4">
          <div class="col-6 col-md-2 mb-3">
            <h5>Drop & Shop</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="/location" class="nav-link p-0 text-white">
                  Locations
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/contact" class="nav-link p-0 text-white">
                Phone: 1-800-dropandshop 
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/contact" class="nav-link p-0 text-white">
                Email: D&S@gmail.com 
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>Useful links</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="/termsOfService" class="nav-link p-0 text-white">
                  Terms of Service
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/privacyPolicy" class="nav-link p-0 text-white">
                  Privacy Policy
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/faq" class="nav-link p-0 text-white">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/about-page" class="nav-link p-0 text-white">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="d-flex flex-column  flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; Drop & Shop. All Rights Reserved</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-dark" href="#">
                <i class="bi bi-twitter-x text-white display-6 "></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <i class="bi bi-facebook text-white display-6"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-dark" href="#">
                <i class="bi bi-instagram text-white text-xl display-6"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
