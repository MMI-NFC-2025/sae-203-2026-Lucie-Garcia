import { allArtistes, allScene, artisteSort, getArtiste, getScene, getScenesBySceneID, getArtistesBySceneName, newArtiste, modifyArtiste, deleteArtiste } from "./backend.mjs";
/*
try {
    const artistes = await allArtistes();
    console.log(artistes);
} catch (error) {
    console.error("Error fetching artistes:", error);
}


try {
    const scenes = await allScene();
    console.log(scenes);
} catch (error) {
    console.error("Error fetching scenes:", error);
}
    

try {
    const sortedArtistes = await artisteSort();
    console.log(sortedArtistes);
} catch (error) {
    console.error("Error fetching sorted artistes:", error);
}


try {
    const artiste = await getArtiste("bmf423t7mq7cwuc");
    console.log(artiste);
} catch (error) {
    console.error("Error fetching artiste:", error);
}

try {
    const scene = await getScene("kh3rr8obv1m8uu0");
    console.log(scene);
} catch (error) {
    console.error("Error fetching scene:", error);
}


try {
    const scenes = await getScenesBySceneID("kh3rr8obv1m8uu0");
    console.log(scenes);
} catch (error) {
    console.error("Error fetching scenes by scene ID:", error);
}



try {
    const artistes = await getArtistesBySceneName("Scène Principale");
    console.log(artistes);
} catch (error) {
    console.error("Error fetching artistes by scene name:", error);
}




try {
    await newArtiste({
        "nom": "Test Artiste",
        "date": "2024-07-01",
        "scene": "kh3rr8obv1m8uu0"
    });
    console.log("Artiste created successfully");
} catch (error) {
    console.error("Error creating artiste:", error);
}

*/

try {
    await modifyArtiste("iiayogiv6v4bsa4", {
        "nom": "Test Artiste Modifié",
        "date": "2024-07-02",
        "scene": "kh3rr8obv1m8uu0"
    });
    console.log("Artiste modified successfully");
} catch (error) {
    console.error("Error modifying artiste:", error);
}



try {
    await deleteArtiste("iiayogiv6v4bsa4");
    console.log("Artiste deleted successfully");
} catch (error) {
    console.error("Error deleting artiste:", error);
}