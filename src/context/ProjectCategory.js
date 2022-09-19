import React from "react";

const ProjectCategoryContext = React.createContext();

export const allCategory = {
  _id: "all",
  title: {
    ar: "الكل",
    en: "All",
  },
};

export const ProjectCategoryProvider = (props) => {
  const [selectedCategory, setSelectedCategory] = React.useState(allCategory);

  return (
    <ProjectCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
      {...props}
    />
  );
};

function useProjectCategory() {
  const context = React.useContext(ProjectCategoryContext);
  if (context === undefined) {
    throw new Error(
      "useProjectCategory must be used within a ProjectCategoryProvider"
    );
  }
  return context;
}
export { useProjectCategory };
