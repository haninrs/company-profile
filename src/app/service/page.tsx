import FooterPage from '@/components/footer/foot'
import ProductDetail from '@/components/productDetail'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Our Service",
  description: "This service page",
};

export default function ProductPage() {
  return (
   <div>
    <ProductDetail />
    <FooterPage />
   </div>
  )
}
