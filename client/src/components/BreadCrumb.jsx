import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadCrumb({ path }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {path.map((item, index) => (
          <BreadcrumbItem key={index}>
            {index < path.length - 1 ? (
              <>
                <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}



