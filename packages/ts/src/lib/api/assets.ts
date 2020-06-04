import { getRandom } from "lib/utils";

export type AssetData = Record<string, any>;

export type AssetResult = {
  data: AssetData;
};

export type AssetsResult = {
  data: AssetData[];
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
  probability: getRandom(id, 100),
  timeHorizon: getRandom(id, 8),
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
  probability: getRandom(id, 100),
  timeHorizon: getRandom(id, 8),
  relatedAssets: "Track B, Load 2 Brake",
  checkboxValue: `id_${id}`
});

const generateData = (id: number): AssetData => {
  const data = id % 2 === 0 ? compressorData(id) : machineData(id);
  return {
    ...data,
    id: `id_${id}`,
    probability: `${getRandom(id, 100)}%`,
    timeHorizon: `${getRandom(id, 8)}h`,
    checkboxValue: `id_${id}`
  };
};

const generateAsset = (id: number): AssetResult => ({
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

const fetchAsset = async (id: string): Promise<AssetResult> => {
  return new Promise<AssetResult>(resolve => {
    setTimeout(() => resolve(generateAsset(Number(id.split("_")[1]))), 500);
  });
};

export { fetchAssets, fetchAsset };
