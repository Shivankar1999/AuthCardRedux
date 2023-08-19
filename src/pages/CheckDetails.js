import React from 'react';
import '../styles/CheckDetails.css'; // Make sure to create the CSS file for styling
import { useSelector } from 'react-redux';
import {
  FaRankingStar,
  FaArrowUpFromGroundWater,
  FaCannabis,
  FaGlobe,
} from 'react-icons/fa6';
export const CheckDetails = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <div className="check-details-container">
      {isAuthenticated ? (
        <div className="section">
          <h2>Primium Services</h2>
          <FaRankingStar />
          <p>
            Curabitur vel justo nec elit ultrices interdum. Fusce nec urna quis
            libero finibus tristique. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed gravida, nisl sit amet pretium varius, ipsum
            ligula suscipit ex, in mattis nunc elit nec dolor. Integer eu dolor
            at metus congue varius a eu mauris. Integer id venenatis leo. Sed
            laoreet, purus id tristique gravida, risus felis cursus odio, ac
            elementum neque tortor in purus. Fusce quis hendrerit urna. Praesent
            piscing diam, a cursus ipsum ante quis turpis. Nulrimis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Morbi lacinia
            molestie dui.
          </p>
          <button className="section-button">View Private Secton</button>
        </div>
      ) : (
        <h5 style={{ width: '100%' }}>
          LogIn for access our Primimum Services
        </h5>
      )}
      <div className="section">
        <h2>Services</h2>
        <FaArrowUpFromGroundWater />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          libero vitae mauris maximus tempus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed gravida, nisl sit amet pretium
          varius, ipsum ligula suscipit ex, in mattis nunc elit nec dolor.
          Integer eu dolor at metus congue varius a eu mauris. Integer id
          venenatis leo. Sed laoreet, purus id tristique gravida, risus felis
          cursus odio, ac elementum neque tortor in purus. Fusce quis hendrerit
          urna. Praesent quis hendrerit justo. Fusce eu dui mi. Duis sodales
          hendrerit nulla, eu sollicitudin velit consectetur vel. Vivamus
          tristique ligula non elit imperdiet, in iaculis nulla bibendum. Etiam
          rci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie
          dui.
        </p>
        <button className="section-button">Learn More</button>
      </div>
      <div className="section">
        <h2>Applications</h2>
        <FaCannabis />
        <p>
          Proin vulputate justo eget velit vehicula, nec maximus orci
          tincidunt.' Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed gravida, nisl sit amet pretium varius, ipsum ligula suscipit ex,
          in mattis nunc elit nec dolor. Integer eu dolor at metus congue varius
          a eu mauris. Integer id venenatis leo. Sed laoreet, purus id tristique
          gravida, risus felis cursus odio, ac elementum neque tortor in purus.
          Fusce quis hendrerit urna. Praesent quis hendrerit justo. Fusce eu dui
          mi. Duis sodales hendrerit nulla, eu sollicitudin velit consectetur
          vel. Vivamus tristique ligula non elit imperdiet, in iaculis nulla
          bibendum. Etiam ac sagittis urna. Nulla facilisi. Donec lacinia dolor
          sed elit bibendum feugiat. Integer nec odio. Praesent libero. Sed
          cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum '
        </p>
        <button className="section-button">Explore Applications</button>
      </div>
      <div className="section">
        <h2>Global Services</h2>
        <FaGlobe />
        <p>
          Curabitur vel justo nec elit ultrices interdum. Fusce nec urna quis
          libero finibus tristique. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed gravida, nisl sit amet pretium varius, ipsum
          ligula suscipit ex, in mattis nunc elit nec dolor. Integer eu dolor at
          metus congue varius a eu mauris. Integer id venenatis leo. Sed
          laoreet, purus id tristique gravida, risus felis cursus odio, ac
          elementum neque tortor in purus. Fusce quis hendrerit urna. Praesent
          piscing diam, a cursus ipsum ante quis turpis. Nulrimis in faucibus
          orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie
          dui.
        </p>
        <button className="section-button">View Global Services</button>
      </div>
    </div>
  );
};
