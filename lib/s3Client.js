import s3 from "s3-client";
export const upload = () => {
  var client = s3.createClient({
    maxAsyncS3: 20, // this is the default
    s3RetryCount: 3, // this is the default
    s3RetryDelay: 1000, // this is the default
    multipartUploadThreshold: 20971520, // this is the default (20 MB)
    multipartUploadSize: 15728640, // this is the default (15 MB)
    s3Options: {
      accessKeyId: "20OGSHV9P9STDR7CB9KH", // access key
      secretAccessKey: "gppiYKiUYZzg9tOy9fmqJWD3HyItqWpr0eMJCy2K", // secret access key
      endpoint: "https://is3.cloudhost.id/asgur", // url cloud lu
    },
  });

  var params = {
    localFile: "../public/background.png", // nama file yg mau di upload di computer lu, pake extension

    s3Params: {
      Bucket: "userprofile", // nama bucket lu
      Key: "background.png", // nama file di cloudnya, pake extension
      ACL: "public-read",
    },
  };

  var uploader = client.uploadFile(params);

  uploader.on("error", function (err) {
    console.error("unable to upload:", err.stack);
  });
  uploader.on("end", function () {
    console.log("done uploading");
  });
};


