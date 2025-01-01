import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import React, { useState, useEffect } from "react";
import { Photo, shuffledPhotos as photos } from "./data";

export default function AddNewElement() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <LayoutGroup>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-pink-500 select-none text-white font-sans relative">
        {/* Thumbnail Grid */}
        <div className="w-80 h-80 bg-white bg-opacity-20 rounded-2xl p-2 absolute top-10 left-1/2 transform -translate-x-1/2 flex flex-wrap-reverse gap-2">
          {photos.map((photo) => (
            <Thumbnail
              key={photo.id}
              photo={photo}
              setSelected={setSelected}
              selected={selected}
            />
          ))}
        </div>

        {/* Detailed View */}
        <AnimatePresence>
          {selected && (
            <DetailView
              photo={photos.find((p) => p.id === selected)!}
              onClose={() => setSelected(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
}

interface ThumbnailProps {
  photo: Photo;
  setSelected: (id: string) => void;
  selected: string | null;
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  photo,
  setSelected,
  selected,
}) => {
  // Preloading the bigger version
  useEffect(() => {
    const img = new Image();
    img.src = `https://images.unsplash.com/photo-${photo.id}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&fm=jpg&w=500&h=281&fit=crop&crop=edges`;
  }, [photo.id]);

  return (
    <motion.div
      className="w-24 h-14 bg-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out"
      layoutId={photo.id}
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-${photo.id}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&fm=jpg&w=102&h=57&fit=crop&crop=edges')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onTap={() => setSelected(photo.id)}
      initial={{ opacity: 1 }}
      animate={{ opacity: selected === photo.id ? 0 : 1 }}
      transition={{ duration: 0.1 }}
      role="button" // Accessibility improvement
      aria-label={`View details of ${photo.building}`} // Accessibility improvement
    />
  );
};

interface DetailViewProps {
  photo: Photo;
  onClose: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ photo, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onTap={onClose}
      />

      {/* Detailed Photo Container with Flex Centering */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center cursor-zoom-out"
        onTap={onClose}
      >
        <motion.div
          className="w-[500px] h-72 rounded-lg overflow-hidden relative"
          layoutId={photo.id}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-${photo.id}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&fm=jpg&w=500&h=281&fit=crop&crop=edges')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Descriptive Text Positioned Relative to Image */}
          <div className="absolute bottom-4 left-4">
            <p className="text-lg font-medium text-white drop-shadow-md">
              <a
                href={photo.wiki}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {photo.building}
              </a>
            </p>
            <p className="text-base font-light text-white drop-shadow-md">
              {photo.location}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
