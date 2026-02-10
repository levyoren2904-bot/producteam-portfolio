'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className={cn("grid gap-4", images.length > 1 && "md:grid-cols-2")}>
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
              'group relative overflow-hidden rounded-lg border border-border bg-surface-elevated',
              index === 0 && images.length > 2 && 'md:col-span-2'
            )}
          >
            <button
              onClick={() => setSelectedImage(index)}
              className="block w-full aspect-video"
            >
              <div className="relative h-full w-full">
                {image.src ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-surface">
                    <div className="h-24 w-40 rounded border border-border/50 bg-background">
                      <div className="h-full w-full bg-grid-overlay opacity-50" />
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-text bg-background">
                    <svg
                      className="h-5 w-5 text-text"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>

            {image.caption && (
              <div className="p-4">
                <p className="text-sm text-text-muted">{image.caption}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              {images[selectedImage].src &&
              images[selectedImage].src.includes("Israel’s Public Diplomacy") ? (
                // Tall website screens – scroll inside lightbox to see full page
                <div className="relative w-[80vw] max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg border border-border bg-surface">
                  <Image
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt}
                    width={1920}
                    height={3000}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ) : (
                // Default behavior for all other projects
                <div className="relative aspect-video w-[80vw] max-w-5xl overflow-hidden rounded-lg border border-border">
                  {images[selectedImage].src ? (
                    <Image
                      src={images[selectedImage].src}
                      alt={images[selectedImage].alt}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-surface">
                      <div className="h-48 w-80 rounded border border-border/50 bg-background">
                        <div className="h-full w-full bg-grid-overlay opacity-50" />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {images[selectedImage].caption && (
                <p className="mt-4 text-center text-text-muted">
                  {images[selectedImage].caption}
                </p>
              )}

              {/* Navigation */}
              <div className="absolute -left-16 top-1/2 -translate-y-1/2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(
                      selectedImage === 0 ? images.length - 1 : selectedImage - 1
                    );
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:border-primary"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>

              <div className="absolute -right-16 top-1/2 -translate-y-1/2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(
                      selectedImage === images.length - 1 ? 0 : selectedImage + 1
                    );
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:border-primary"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:border-primary"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
