type knowledgeData = {
  title: String;
  project: String;
  informationType: String;
  uploadedBy: String;
  created: Date;
};

type knowledgesData = {
  count: Number;
  results: knowledgeData[];
};
