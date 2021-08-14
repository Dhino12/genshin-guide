const getPathChara = (linkImage, getImage) => {
    const getLengthEnpoint = linkImage.length;

    if (getImage === true) {
            // ubah icon menjadi portrait
        return linkImage.replace('icon', 'portrait');
    }

    if (getImage === false) {
            // hapus icon.webp akan menjadi = /characters/albedo/
        return linkImage.slice(23, getLengthEnpoint).replace('icon.webp', '');
    }

    return undefined;
};

export default getPathChara;
