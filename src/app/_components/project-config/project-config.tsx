/* eslint-disable unicorn/no-array-for-each */
import React, { useCallback, useMemo } from "react";

import type { EFeatureName } from "@/lib/features";
import type { EModuleName } from "@/lib/modules";
import type { createProjectSchema } from "@/lib/schemas/create-project";
import type { Control, FieldValues, useForm } from "react-hook-form";
import type { z } from "zod";

import dynamic from "next/dynamic";

import { Container } from "@/components/common/grid";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { chains } from "@/lib/chains";
import { getModuleFeatureConfig } from "@/lib/features";

export type CreateProjectProps = {
  form: ReturnType<typeof useForm<z.infer<typeof createProjectSchema>>>;
  testnetMode?: boolean;
  toggleTestnetSwitch?: () => void;
  scrollToTop: () => void;
};

const ProjectName = dynamic(() => import("./project-name"), {
  loading: () => <Skeleton className="h-[192px] w-full sm:h-[252px]" />,
  ssr: false,
});
const ProjectModulesSelect = dynamic(() => import("./project-modules-select"), {
  loading: () => (
    <Skeleton className="h-[1200px] w-full lg:h-[360px] md:h-[568px]" />
  ),
  ssr: false,
});
const ProjectFeaturesSelect = dynamic(
  () => import("./project-features-select"),
  {
    loading: () => <Skeleton className="w-full lg:h-[890px]" />,
    ssr: false,
  },
);
const ProjectFooterConfig = dynamic(() => import("./project-footer-config"), {
  loading: () => (
    <Skeleton className="h-[168px] w-full lg:h-[890px] md:h-[144px]" />
  ),
  ssr: false,
});
const ControlledFormChainSelect = dynamic(
  () => import("@/components/common/chain-select"),
  {
    loading: () => (
      <Skeleton className="h-[168px] w-full lg:h-[890px] md:h-[144px]" />
    ),
    ssr: false,
  },
);

export default function ProjectConfig({
  form,
  testnetMode,
  toggleTestnetSwitch,
  scrollToTop,
}: CreateProjectProps) {
  const projectContractsSet = form.watch("contracts");

  const activeModules = useMemo(
    () => Object.keys(projectContractsSet) as EModuleName[],
    [projectContractsSet],
  );

  const getModuleFeatures = useCallback(
    (module: EModuleName) => [...(projectContractsSet[module]?.values() ?? [])],
    [projectContractsSet],
  );

  function toggleModule(moduleName: EModuleName) {
    if (activeModules.includes(moduleName)) {
      form.setValue(
        "contracts",
        Object.fromEntries(
          activeModules
            .filter((m) => m !== moduleName)
            .map((m) => [m, projectContractsSet[m]]),
        ),
      );
    } else {
      form.setValue("contracts", {
        ...projectContractsSet,
        [moduleName]: new Set(),
      });
    }
  }

  function toggleModuleFeature(
    moduleName: EModuleName,
    featureName: EFeatureName,
  ) {
    const moduleActiveFeatures = getModuleFeatures(moduleName);
    const featureConfig = getModuleFeatureConfig(moduleName, featureName);
    if (!moduleActiveFeatures || !featureConfig) return;

    const featureSetCopy = new Set(moduleActiveFeatures);
    if (moduleActiveFeatures.includes(featureName)) {
      featureSetCopy.delete(featureName);
      featureConfig.exclusiveSet?.forEach((f) => featureSetCopy.delete(f));
    } else {
      featureSetCopy.add(featureName);
      featureConfig.exclusiveSet?.forEach((f) => featureSetCopy.delete(f));
      featureConfig.inclusiveSet?.forEach((f) => featureSetCopy.add(f));
    }
    form.setValue("contracts", {
      ...projectContractsSet,
      [moduleName]: featureSetCopy,
    });
  }

  return (
    <div className="h-full w-full py-3">
      <ProjectName form={form} scrollToTop={scrollToTop} />
      <div className="h-8 md:h-12" />

      <ControlledFormChainSelect
        control={form.control as unknown as Control<FieldValues>}
        name="chainId"
        label="Choose Project Chain"
        chainOption={chains}
        testnetMode={testnetMode}
        toggleTestnetSwitch={toggleTestnetSwitch}
      />

      <FormField
        control={form.control}
        name="contracts"
        render={() => (
          <>
            <FormItem className="flex flex-col gap-2">
              <div className="h-4" />
              <FormLabel className="text-2xl font-bold md:text-[32px]">
                Choose Modules
              </FormLabel>
              <FormMessage />
              <FormDescription className="text-grey !mb-6 text-[16px] md:text-xl">
                These are the building blocks of your dApp. You can combine then
                however you want.
              </FormDescription>
              <FormControl>
                <ProjectModulesSelect
                  activeModules={activeModules}
                  toggleModule={toggleModule}
                />
              </FormControl>
            </FormItem>
            {activeModules.length > 0 && (
              <>
                <div className="h-6" />
                <FormLabel className="text-2xl font-bold md:text-[32px]">
                  Choose Features
                </FormLabel>
                <FormDescription className="text-grey text-[16px] md:text-xl">
                  Go beyond and add features to your dApp. Be careful to not
                  miss some now, you can not add them later.
                </FormDescription>
              </>
            )}
            {activeModules.map((module) => (
              <>
                <div className="h-8" />
                <FormItem>
                  <FormMessage />
                  <FormControl>
                    <ProjectFeaturesSelect
                      activeFeatures={getModuleFeatures(module) ?? []}
                      moduleName={module}
                      toggleModuleFeature={toggleModuleFeature}
                      testnetMode={testnetMode}
                    />
                  </FormControl>
                </FormItem>
              </>
            ))}
          </>
        )}
      />
      <div className="h-8 md:h-12" />
      <Container variant="fluid" className="!px-0">
        <ProjectFooterConfig form={form} scrollToTop={scrollToTop} />
      </Container>
      <div className="h-12" />
    </div>
  );
}
