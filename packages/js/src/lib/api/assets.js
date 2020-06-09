import { getRandom } from "lib/utils";

const compressorData = id => ({
  headerTitle: `Risk of downtime ${id + 1}`,
  status: 5,
  event: {
    description: `Risk of downtime on Truck ${id}`,
    timestamp: "2 minutes ago",
    schedule: "fix now"
  },
  relatedAssets: "Track A, Zone 15 Brake"
});

const machineData = id => ({
  headerTitle: `Track severe ${id + 1}`,
  status: 2,
  event: {
    description: `Track ${id} severe breakdown`,
    timestamp: "2 hours ago",
    schedule: "fix 3rd shift"
  },
  relatedAssets: "Track B, Load 2 Brake"
});

const generateData = id => {
  const data = id % 2 === 0 ? compressorData(id) : machineData(id);
  return {
    ...data,
    id: `id_${id}`,
    probability: `${getRandom(id, 100)}%`,
    timeHorizon: `${getRandom(id, 8)}h`,
    checkboxValue: `id_${id}`
  };
};

const generateAssets = (num = 20) => ({
  data: Array.from(Array(num).keys()).map(i => generateData(i))
});

const fetchAssets = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(generateAssets()), 500);
  });
};

const fetchAsset = async id => {
  return new Promise(resolve => {
    setTimeout(() => resolve(generateData(id.split("_")[1])), 500);
  });
};

export { fetchAssets, fetchAsset };
