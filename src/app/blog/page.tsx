"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const { t, variant, setVariant } = useLanguage();

  // Get articles, categories, and tags from translations
  const ARTICLES = (t("blog.articles") as any[]).map((article, index) => ({
    id: index + 1,
    image: "/blog.jpg",
    ...article
  }));
  
  const CATEGORIES = t("blog.categoryList") as string[];
  const TAGS = t("blog.tagList") as string[];

  // Filtrowanie artykułów
  const filteredArticles = ARTICLES.filter((article) => {
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || 
      article.categories.includes(selectedCategory);
    
    const matchesTag = !selectedTag || 
      article.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setSelectedTag(null);
    setSearchQuery("");
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
    setSelectedCategory(null);
    setSearchQuery("");
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedTag(null);
    setSearchQuery("");
  };

  return (
    <>
      <Navbar variant={variant} setVariant={setVariant} showLanguageSelector={true} />
      
      {/* Hero Section z tłem */}
      <section className="relative flex items-center overflow-hidden py-12 md:py-20">
        {/* Zdjęcie w tle */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog.jpg"
            alt="Blog freemoji"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay dla lepszej czytelności tekstu */}
          <div className="absolute inset-0 bg-white/40" />
        </div>

        {/* Zawartość hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl">
            {/* Logo */}
            <div className="mb-8 animate-fade-up">
              <Image
                src="/logo.svg"
                alt="freemoji"
                width={180}
                height={60}
                className="w-auto h-12 md:h-16"
              />
            </div>

            {/* Tekst */}
            <div className="animate-fade-up stagger-1">
              <h1 className="font-display font-800 text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-gray-900">
                {t("blog.hero.title")}
              </h1>
              <p className="text-lg md:text-xl text-gray-900 mb-8 leading-relaxed">
                {t("blog.hero.subtitle")}
              </p>
            </div>

            {/* Przycisk do produktów */}
            <div className="animate-fade-up stagger-2">
              <Link
                href="/products/bettermessage"
                className="inline-block bg-yellow hover:bg-yellow-dark text-gray-900 font-600 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {t("blog.hero.cta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja artykułów */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Aktywne filtry */}
          {(selectedCategory || selectedTag || searchQuery) && (
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="text-sm font-600 text-gray-700">{t("blog.activeFilters")}</span>
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="px-3 py-1 bg-yellow text-gray-900 rounded-full text-sm font-600 hover:bg-yellow-dark transition-colors"
                >
                  {selectedCategory} ✕
                </button>
              )}
              {selectedTag && (
                <button
                  onClick={() => setSelectedTag(null)}
                  className="px-3 py-1 bg-yellow text-gray-900 rounded-full text-sm font-600 hover:bg-yellow-dark transition-colors"
                >
                  #{selectedTag} ✕
                </button>
              )}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-3 py-1 bg-yellow text-gray-900 rounded-full text-sm font-600 hover:bg-yellow-dark transition-colors"
                >
                  "{searchQuery}" ✕
                </button>
              )}
              <button
                onClick={clearFilters}
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                {t("blog.clearAll")}
              </button>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Lewa kolumna - Lista artykułów */}
            <div className="lg:col-span-2 space-y-8">
              {filteredArticles.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center">
                  <p className="text-xl text-gray-600">
                    {t("blog.noResults")}
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 inline-block bg-yellow hover:bg-yellow-dark text-gray-900 font-600 px-6 py-3 rounded-full transition-colors"
                  >
                    {t("blog.clearFilters")}
                  </button>
                </div>
              ) : (
                filteredArticles.map((article) => (
                  <article 
                    key={article.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Zdjęcie artykułu */}
                    <div className="relative aspect-video">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Treść artykułu */}
                    <div className="p-8">
                      <div className="text-sm text-gray-500 mb-3 font-600">
                        {article.date}
                      </div>
                      
                      <h2 className="font-display font-700 text-3xl mb-4 text-gray-900">
                        {article.title}
                      </h2>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-3 text-sm font-600 text-gray-900 pb-6 border-b-4 border-yellow">
                        <span>{article.category}</span>
                        <span>|</span>
                        <span>{article.tag}</span>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>

            {/* Prawa kolumna - Sidebar */}
            <aside className="space-y-8">
              
              {/* Wyszukiwarka */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t("blog.search")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow transition-colors"
                  />
                  <svg 
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Najnowsze artykuły */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-display font-700 text-xl mb-6 pb-3 border-b-4 border-yellow">
                  {t("blog.latestArticles")}
                </h3>
                <div className="space-y-4">
                  {ARTICLES.slice(0, 3).map((article) => (
                    <div 
                      key={article.id}
                      className="flex gap-4 group cursor-pointer"
                    >
                      <div className="relative w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-1">
                          {article.date}
                        </div>
                        <h4 className="text-sm font-600 text-gray-900 line-clamp-2 group-hover:text-yellow transition-colors">
                          {article.title}
                        </h4>
                        <div className="text-xs text-gray-600 mt-1">
                          {t("blog.readMore")}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kategorie */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-display font-700 text-xl mb-6 pb-3 border-b-4 border-yellow">
                  {t("blog.categories")}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryClick(category)}
                      className={`text-sm text-left transition-colors ${
                        selectedCategory === category
                          ? 'text-yellow font-700'
                          : 'text-gray-700 hover:text-yellow'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tagi */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-display font-700 text-xl mb-6 pb-3 border-b-4 border-yellow">
                  {t("blog.tags")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`px-3 py-1 text-sm transition-colors ${
                        selectedTag === tag
                          ? 'bg-yellow text-gray-900 font-700'
                          : 'text-gray-700 hover:text-yellow'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
