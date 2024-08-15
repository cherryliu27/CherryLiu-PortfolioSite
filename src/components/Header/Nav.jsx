import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Nav.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Nav() {
  const location = useLocation();
  const collapseRef = useRef(null); 
  useEffect(() => {
    if (location.hash === "#works") {
      const worksSection = document.getElementById("works");
      if (worksSection) {
        setTimeout(() => {
          worksSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start' 
          });
        }, 250); 
      }
    }
  }, [location]);
  const handleLinkClick = () => {
    if (collapseRef.current) {
      const bsCollapse = new window.bootstrap.Collapse(collapseRef.current, {
        toggle: false
      });
      bsCollapse.hide(); // Hide the collapse element
    }
  };


    return (
          <nav class="navbar navbar-expand-md p-0">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">CL.</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/" onClick={handleLinkClick}>Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#works" onClick={handleLinkClick}> Works</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link spotlight-link" href="#contact" onClick={handleLinkClick}>Hire Me</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      
    );
  };