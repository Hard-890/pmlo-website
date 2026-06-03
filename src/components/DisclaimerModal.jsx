import { useState, useEffect } from "react";

function DisclaimerModal() {
  const [open, setOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("pmloDisclaimer");

    if (!accepted) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    if (!agreed) return;

    localStorage.setItem(
      "pmloDisclaimer",
      "accepted"
    );

    setOpen(false);
  };

  if (!open) return null;

  return (
    <>
      {/* Main Disclaimer Modal */}

      <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4">

        <div className="bg-white max-w-2xl w-full rounded-2xl p-8 shadow-2xl">

          <h2 className="text-3xl font-law font-bold mb-6">
            Disclaimer
          </h2>

          <div className="text-gray-700 space-y-4">

            <p>
              The information contained on this website
              is provided solely for informational
              purposes and should not be construed as
              legal advice.
            </p>

            <p>
              Accessing this website does not create an
              advocate-client relationship with
              Parveen Munjal Law Office.
            </p>

            <p>
              Communications through forms, email,
              telephone, WhatsApp or any other means
              do not automatically establish a
              professional relationship.
            </p>

            <p>
              Every legal matter is unique and legal
              outcomes depend upon specific facts,
              evidence, applicable laws and judicial
              discretion.
            </p>

          </div>

          {/* Acceptance */}

          <div className="mt-8 border-t pt-6">

            <label className="flex items-start gap-3 cursor-pointer">

              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) =>
                  setAgreed(e.target.checked)
                }
                className="mt-1"
              />

              <span className="text-sm text-gray-600">

                I have read and agree to the{" "}

                <button
                  type="button"
                  onClick={() =>
                    setShowTerms(true)
                  }
                  className="text-yellow-600 font-semibold underline"
                >
                  Terms & Conditions
                </button>

                {" "}and acknowledge the Disclaimer.

              </span>

            </label>

          </div>

          <button
            onClick={handleAccept}
            disabled={!agreed}
            className={`
              mt-6
              px-6
              py-3
              rounded-lg
              font-semibold
              transition-all
              ${
                agreed
                  ? "bg-yellow-500 hover:bg-yellow-400 text-black"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }
            `}
          >
            I Accept & Continue
          </button>

        </div>

      </div>

      {/* Terms Modal */}

      {showTerms && (
        <div className="fixed inset-0 bg-black/80 z-[10000] flex items-center justify-center p-4">

          <div className="bg-white max-w-3xl w-full rounded-2xl p-8 max-h-[80vh] overflow-y-auto">

            <h2 className="text-3xl font-law font-bold mb-6">
              Terms & Conditions
            </h2>

            <div className="space-y-4 text-gray-700">

              <p>
                1. The information available on this
                website is provided solely for general
                informational purposes.
              </p>

              <p>
                2. Nothing contained on this website
                shall be construed as legal advice,
                legal opinion, solicitation,
                advertisement, or invitation to
                establish an advocate-client
                relationship.
              </p>

              <p>
                3. Accessing, browsing, or using this
                website does not create an
                advocate-client relationship with
                Parveen Munjal Law Office.
              </p>

              <p>
                4. Any communication through forms,
                email, telephone, WhatsApp, or other
                channels does not by itself create an
                advocate-client relationship.
              </p>

              <p>
                5. Visitors should not act or refrain
                from acting solely based upon
                information available on this website
                and should seek professional legal
                advice for their specific matters.
              </p>

              <p>
                6. While reasonable efforts are made
                to maintain accurate information, no
                warranty is given regarding the
                completeness, reliability, or accuracy
                of website content.
              </p>

              <p>
                7. Parveen Munjal Law Office shall not
                be liable for any loss or damages
                arising from reliance on information
                contained on this website.
              </p>

              <p>
                8. References to courts, tribunals,
                legal developments, or practice areas
                are for informational purposes only.
              </p>

              <p>
                9. Past legal results, if mentioned,
                do not guarantee similar outcomes in
                future matters.
              </p>

              <p>
                10. By continuing to use this website,
                you acknowledge that you have read,
                understood and accepted these terms
                and conditions.
              </p>

            </div>

            <button
              onClick={() =>
                setShowTerms(false)
              }
              className="
                mt-8
                bg-yellow-500
                hover:bg-yellow-400
                px-6
                py-3
                rounded-lg
                font-semibold
              "
            >
              Close
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default DisclaimerModal;