export default function Footer(){
    return(
        <>
        <footer className="footer --bs-primary-bg-subtle text-dark py-4 mt-auto">
  <div className="container text-center">
    <h5 className="fw-bold mb-3">🌙 MOON</h5>
    <p className="mb-2">Conectando tecnología e innovación para todos.</p>
    <div className="social-icons mb-3">
      <a href="#" className="mx-2 text-dark">
        <i className="bi bi-facebook" />
      </a>
      <a href="#" className="mx-2 text-dark">
        <i className="bi bi-twitter-x" />
      </a>
      <a href="#" className="mx-2 text-dark">
        <i className="bi bi-instagram" />
      </a>
      <a href="#" className="mx-2 text-dark">
        <i className="bi bi-linkedin" />
      </a>
    </div>
    <div className="contact-info">
      <p>📧 contacto@moonproject.com</p>
      <p>📞 +57 310 000 0000</p>
      <p>🌍 Desarrollado por TechNova Studios</p>
    </div>
    <hr className="my-3" />
    <p className="small mb-0">
      © 2025 Moon Project. Todos los derechos reservados.
    </p>
  </div>
</footer>

        </>
    )
}