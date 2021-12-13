export default function Skeleton() {
  return (
    <>
      <ProductsListSkeleton />
      <ProductsListSkeleton />
    </>
  );
}

function ProductsListSkeleton() {
  return (
    <div className="pt-10 ml-2">
      <div class="bg-gray-600 h-3 w-32 animate-pulse rounded-2xl mb-3"></div>
      <hr className="text-white mb-5" />
      <div className="bg-secondary flex flex-row rounded-xl py-6 px-7">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div class="bg-primary rounded-sm py-4 px-6 mx-4">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col justify-between">
          <div class="bg-gray-400 w-[70px] h-[70px] animate-pulse rounded-xl"></div>
          <div class="mt-3 bg-gray-600 w-16 animate-pulse h-3 rounded-2xl mb-3"></div>
        </div>
        <div className="flex flex-col justify-between">
          <div class="bg-gray-300 w-24 animate-pulse h-3 rounded-2xl mb-3"></div>
          <div class="bg-gray-600 w-20 animate-pulse h-3 rounded-2xl mb-3"></div>
          <div class="bg-gray-300 w-12 animate-pulse h-3 rounded-2xl mb-3"></div>
          <div class="mt-3 bg-gray-600 w-20 animate-pulse h-3 rounded-2xl mb-3"></div>
        </div>
      </div>
      <div class="mt-2 bg-gray-600 w-36 animate-pulse h-3 rounded-2xl mb-3"></div>
    </div>
  );
}
