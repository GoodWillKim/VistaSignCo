export const metadata = { title: "Upload Artwork", description: "Send us your files after ordering." };

export default function UploadPage(){
  return (
    <div className="container py-12">
      <h1 className="text-2xl font-bold mb-4">Upload Artwork</h1>
      <div className="card p-6">
        <p className="text-slate-600 mb-4">Provide your order number and upload print-ready files. We accept AI, PDF, EPS, and high-res PNG/JPG.</p>
        <form className="grid gap-3" aria-label="Upload artwork form" onSubmit={(e)=>e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-3">
            <div><label className="label" htmlFor="order">Order #</label><input id="order" className="input" placeholder="Order #" required /></div>
            <div><label className="label" htmlFor="email">Email</label><input id="email" type="email" className="input" placeholder="you@example.com" required /></div>
          </div>
          <label className="btn-outline cursor-pointer w-max" aria-label="Choose files">
            <input type="file" className="hidden" multiple />
            Choose Files
          </label>
          <button className="btn w-max">Submit Files</button>
        </form>
      </div>
    </div>
  )
}
