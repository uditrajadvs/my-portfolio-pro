const driveDocument = (id: string) => ({
  viewHref: `https://drive.google.com/file/d/${id}/view`,
  previewHref: `https://drive.google.com/file/d/${id}/preview`,
  downloadHref: `https://drive.google.com/uc?export=download&id=${id}`,
});

export const documentsData = {
  resume: driveDocument('1mDMbSgoB4wwszeKrgRfO75nsk08fl-8g'),
  javaCertification: driveDocument('1U_6lXcAPMieaeSoqR_eHNh4AHSpBHYIe'),
};
