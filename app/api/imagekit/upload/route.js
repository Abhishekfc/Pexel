import ImageKit from "imagekit"

const imagekit = new ImageKit({
    publicKey: NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: IMAGEKIT_PRIVATE_KEY,
    urlEndpont: NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
})


export async function POST(request){
    try {
        const {userId} = await auth();
        if(!userId){
            return NextResponse.json({error: "Unauthorized"}, {status : 401})
        }
    } catch (error) {
        
    }
}