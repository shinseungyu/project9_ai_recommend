"use client";

import React, { useEffect } from 'react';

interface AdBannerProps {
  dataAdSlot: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
}

export default function AdBanner({
  dataAdSlot,
  dataAdFormat = 'auto',
  dataFullWidthResponsive = true,
}: AdBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      // AdSense errors are non-critical
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-8" style={{ display: 'none' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', minWidth: '300px' }}
        data-ad-client="ca-pub-5378247298190063"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}
