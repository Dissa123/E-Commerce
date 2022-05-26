import React, { useState } from "react";
 const InventoryMap = (props) => {
  const product = props.product;
  console.log(product)
  const tableRow = () => {
    return (
      <tr className="tbl-bg-white">
        <td><div style={{width:'100px'}}>{product.categoryAbr}</div></td>
        <td><div style={{width:'100px'}}>{product.stockno}</div></td>
        <td><div style={{width:'100px'}}>{product.styleNumber}</div></td>
        <td><div style={{width:'100px'}}>{product.brand}</div></td>
        <td><div style={{width:'100px'}}>{product.manufacture}</div></td>
        <td><div style={{width:'100px'}}>{product.tag}</div></td>
        <td><div style={{width:'100px'}}>{product.storeCode}</div></td>
        <td><div style={{width:'100px'}}>{product.productName}</div></td>
        <td><div style={{width:'100px'}}>{product.companyName}</div></td>
        <td><div style={{width:'100px'}}>{product.companyCode}</div></td>
        <td><div style={{width:'100px'}}>{product.qty}</div></td>
        <td><div style={{width:'100px'}}>{product.sku}</div></td>
        <td><div style={{width:'100px'}}>{product.datebuy}</div></td>
        <td><div style={{width:'100px'}}>{product.datesold}</div></td>
        <td><div style={{width:'100px'}}>{product.shortDescription}</div></td>
        <td><div style={{width:'100px'}}>{product.longDescription}</div></td>
        <td><div style={{width:'100px'}}>{product.cost}</div></td>
        <td><div style={{width:'100px'}}>{product.retailPrice}</div></td>
        <td><div style={{width:'100px'}}>{product.onSale}</div></td>
        <td><div style={{width:'100px'}}>{product.productImages}</div></td>
        <td><div style={{width:'100px'}}>{product.prodCertificatePicture}</div></td>
        <td><div style={{width:'100px'}}>{product.certificateNumber}</div></td>
        <td><div style={{width:'100px'}}>{product.labCertification}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.style}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.styleName}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.stoneClass}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.gemstoneType}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.stoneCut}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.stoneShape}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.stoneColor}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.stoneClarity}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.centerStoneCT}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.ctw}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.gender}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.metalType}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.metalColor}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.goldKarat}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.metalFinish}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.ringSize}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.ringWidth}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.chainType}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.chainLength}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.chainWidth}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.hoopDiameter}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.centerSize}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.pendantHeight}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.pendantWidth}</div></td>
        <td><div style={{width:'100px'}}>{product.attributes.totalCaratWeight}</div></td> 
        <td><div style={{width:'100px'}}>{product.attributes.prodWeight}</div></td> 
        <td><div style={{width:'100px'}}>{product.shippingLength}</div></td>
        <td><div style={{width:'100px'}}>{product.shippingWidth}</div></td>
        <td><div style={{width:'100px'}}>{product.shippingHeight}</div></td>
        <td><div style={{width:'100px'}}>{product.jewelryType}</div></td>
        <td><div style={{width:'100px'}}>{product.assetId}</div></td>
      </tr>
    );
  };
  return <>{tableRow()}</>;
};

export default InventoryMap
