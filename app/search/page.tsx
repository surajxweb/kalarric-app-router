"use client";
import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { BsSearch } from "react-icons/bs";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import search from "@/resources/store.svg";
import Loader from "@/components/Loader";

const SearchPage: NextPage = () => {
  const [formData, setFormData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<[]>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (formData.length > 2) {
        setIsLoading(true);
        const response = await fetch(`/search/api?query=${formData}`);
        const data = await response.json();
        setSearchResults(data.searchData.products);
        setIsLoading(false);
      }
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [formData]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <BsSearch size="2em" color="#b3b3b3" className={styles.reactIcons} />
          <input
            type="text"
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
            placeholder={`let's find somthing`}
            autoFocus
          />
        </div>

        <div className={styles.results}>
          {formData.length > 2 && (
            <h2 className={styles.heading}>Search Results</h2>
          )}
          <div className={styles.list}>
            {isLoading && (
              <div className={styles.loader}>
                <Loader />
                <div>Searching for awesome products.</div>
              </div>
            )}

            {formData.length > 2 &&
              !isLoading &&
              searchResults
                .slice(0, 15)
                .map((product: any) => (
                  <ProductCard
                    key={product.id}
                    name={product.productName}
                    price={product.price}
                    imageURL1={product.images[0].productImage[0].url}
                    imageURL2={product.images[0]?.productImage[1].url}
                    mrp={product.mrp}
                    id={product.id}
                    category={product.category.categoryName}
                  />
                ))}
            {!isLoading &&
              searchResults.length === 0 &&
              formData.length > 2 && (
                <div className={styles.loader}>
                  <div className={styles.emojie}>🥺</div>
                  <div className={styles.loaderText}>
                    Could not find a product matching your query.
                  </div>
                </div>
              )}
          </div>
        </div>

        {/* {searchResults.length <= 0 && (
          <div className={styles.headerImage}>
            <Image src={search} alt="search image" height={500} width={500} />
          </div>
        )} */}
      </div>
    </>
  );
};

export default SearchPage;
