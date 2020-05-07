import { getRandom } from "lib/utils";

type AssetData = object;

type AssetsResult = {
  data: AssetData | AssetData[];
};

const compressorData = id => ({
  headerTitle: `Risk of downtime ${id + 1}`,
  id: `id_${id}`,
  status: 5,
  event: {
    description: `Risk of downtime on Truck ${id}`,
    timestamp: "2 minutes ago",
    schedule: "fix now"
  },
  probability: getRandom(100),
  timeHorizon: getRandom(8),
  relatedAssets: "Track A, Zone 15 Brake",
  checkboxValue: `id_${id}`
});

const machineData = id => ({
  headerTitle: `Track severe ${id + 1}`,
  id: `id_${id}`,
  status: 2,
  event: {
    description: `Track ${id} severe breakdown`,
    timestamp: "2 hours ago",
    schedule: "fix 3rd shift"
  },
  probability: getRandom(100),
  timeHorizon: getRandom(8),
  relatedAssets: "Track B, Load 2 Brake",
  checkboxValue: `id_${id}`
});

const generateData = (i: number): AssetData => {
  return i % 2 === 0 ? compressorData(i) : machineData(i);
};

const generateAsset = (id: number): AssetsResult => ({
  data: generateData(id)
});

const generateAssets = (num): AssetsResult => ({
  data: Array.from(Array(num).keys()).map(i => generateData(i))
});

const fetchAssets = async (num = 20): Promise<AssetsResult> => {
  return new Promise<AssetsResult>(resolve => {
    setTimeout(() => resolve(generateAssets(num)), 500);
  });
};

const fetchAsset = async (id: string): Promise<AssetsResult> => {
  return new Promise<AssetsResult>(resolve => {
    setTimeout(() => resolve(generateAsset(Number(id.split("_")[1]))), 500);
  });
};

export { fetchAssets, fetchAsset };
