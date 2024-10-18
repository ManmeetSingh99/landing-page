import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="border-t border-neutral-700 w-3/4 mx-auto py-10">
      <div className="flex flex-wrap gap-20 md:flex-row md:gap-64">
        <div>
          <h1 className="text-lg font-semibold mb-3">Resources</h1>
          {resourcesLinks.map((link, index) => {
            return (
              <a key={index} className="flex flex-col mb-1" href={link.href}>
                {link.text}
              </a>
            );
          })}
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-3">Platform</h1>
          {platformLinks.map((link, index) => {
            return (
              <a key={index} className="flex flex-col mb-1" href={link.href}>
                {link.text}
              </a>
            );
          })}
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-3">Community</h1>
          {communityLinks.map((link, index) => {
            return (
              <a key={index} className="flex flex-col mb-1" href={link.href}>
                {link.text}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
