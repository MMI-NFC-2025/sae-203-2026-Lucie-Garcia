import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export { pb };


export async function getImageUrl(record, imageField) {
    return pb.files.getURL(record, record[imageField]);
}

export async function allArtistes() {
    return await pb.collection("artistes").getFullList({
        sort: "date",
        expand: "scene"
    });
}

export async function getArtiste(id) {
    return await pb.collection("artistes").getOne(id
        , {
            expand: "scene"
        });
}



export async function Artistes() {
    return await pb.collection("artistes").getFullList({ sort: "date" });
}


export async function allScene() {
    return await pb.collection("scenes").getFullList({ sort: "nom" });
}

export async function artisteSort() {
    return await pb.collection("artistes").getFullList({ sort: "nom" });
}

export async function Artiste(id) {
    return await pb.collection("artistes").getOne(id);
}

export async function getScene(id) {
    return await pb.collection("scenes").getOne(id);
}

export async function getScenesBySceneID(SceneID) {
    return await pb.collection("artistes").getFullList({
        filter: `scene.id = "${SceneID}"`
    });
}

export async function getArtistesBySceneName(sceneName) {
    return await pb.collection("artistes").getFullList({
        filter: `scene.nom = "${sceneName}"`,
        sort: "date"
    });
}

export async function newArtiste(artisteData) {
    return await pb.collection("artistes").create(artisteData);
}

export async function modifyArtiste(id, artisteData) {
    return await pb.collection("artistes").update(id, artisteData);
}

export async function deleteArtiste(id) {
    return await pb.collection("artistes").delete(id);
}