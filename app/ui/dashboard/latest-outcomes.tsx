import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestOutcomes } from '@/app/lib/data';

export default async function LatestOutcomes() {
  const latestOutcome = await fetchLatestOutcomes();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Outcomes
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {
          <div className="bg-white px-6">
            {latestOutcome.map((outcome, i) => {
              return (
                <div
                  key={outcome.name}
                  className={clsx(
                    'flex flex-row items-center justify-between py-4',
                    {
                      'border-t': i !== 0,
                    },
                  )}
                >
                  <div className="flex items-center">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold md:text-base">
                        {outcome.name}
                      </p>
                      <p className="hidden text-sm text-gray-500 sm:block">
                        {outcome.category}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                  >
                    ${outcome.amount}
                  </p>
                </div>
              );
            })}
          </div>
        }
      </div>
    </div>
  );
}