// s3.us-east-1.amazonaws.com
// GET /?list-type=2&continuation-token=ContinuationToken&delimiter=Delimiter&encoding-type=EncodingType&fetch-owner=FetchOwner&max-keys=MaxKeys&prefix=Prefix&start-after=StartAfter HTTP/1.1
// Host: Bucket.s3.amazonaws.com
// x-amz-request-payer: RequestPayer
// x-amz-expected-bucket-owner: ExpectedBucketOwner

function updateImages(imageList) {
	const div = document.getElementById("images");
	for( let image of imageList ) {
		const img = document.createElement("img");
		img.src = "https://c1-study-group-images.s3.amazonaws.com/" + image;
		div.appendChild( img );
	}
}

async function getImagesFromS3() {
	//const url = "https://s3.us-east-1.amazonaws.com/?list-type=2&encoding-type=url";
	/* const headers = {
		"Host": "c1-study-group-images",
		"x-amz-request-payer": "775010165072",
		"mode": 'no-cors'
	} */
	const url = "https://nvi418b58b.execute-api.us-east-1.amazonaws.com/dev";
	const headers = {mode: 'cors'};
	/* const headers = {mode: 'cors', headers: {
		'Access-Control-Allow-Origin': '*'
	}}; */
	//const response = await fetch(url, {headers});
	//console.log( response.json() );
	fetch(url, headers)
  	.then(response => response.json())
  	.then(result => updateImages( result ) );
}
