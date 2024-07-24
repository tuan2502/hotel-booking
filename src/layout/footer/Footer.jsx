import React from 'react';

import footerItems from '../../data/footer.json';

const Footer = () => {
  return (
    <footer className="container mx-auto p-10">
      <div className="flex text-blue">
        {footerItems.map((item) => (
          <div
            className="flex-1"
            key={item.col_number}
          >
            {item.col_values.map((value) => (
              <p
                key={value}
                className="mb-3"
              >
                {value}
              </p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
